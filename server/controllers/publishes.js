const router = require('express').Router()
const db = require('../models')

const {Comment, Publish, User } = db

router.post('/', async (req, res) => {
    
    const publish = await Publish.create(req.body)
    res.json(publish)
})

router.get('/', async (req, res) => {
    const publishes = await Publish.findAll()
    res.json(publishes)
})


router.get('/:publish_id', async (req, res) => {
    let publish_id = Number(req.params.publish_id)
    if (isNaN(publish_id)) {
        res.status(404).json({ message: `Invalid id "${publish_id}"` })
    } else {
        const publish = await Publish.findOne({
            where: { publish_id: publish_id },
            include: {
                association: 'comments',
                include: 'author'
            }
        })
        if (!publish) {
            res.status(404).json({ message: `Could not find publish with id "${publish_id}"` })
        } else {
            res.json(publish)
        }
    }
})

router.put('/:publish_id', async (req, res) => {
    let publish_id = Number(req.params.publish_id)
    if (isNaN(publish_id)) {
        res.status(404).json({ message: `Invalid id "${publish_id}"` })
    } else {
        const publish = await Publish.findOne({
            where: { publish_id: publish_id },
        })
        if (!publish) {
            res.status(404).json({ message: `Could not find publish with id "${publish_id}"` })
        } else {
            Object.assign(publish, req.body)
            await publish.save()
            res.json(publish)
        }
    }
})

router.delete('/:publish_id', async (req, res) => {
    let publish_id = Number(req.params.publish_id)
    if (isNaN(publish_id)) {
        res.status(404).json({ message: `Invalid id "${publish_id}"` })
    } else {
        const publish = await Publish.findOne({
            where: {publish_id: publish_id},
        })
        if (!publish) {
            res.status(404).json({ message: `Could not find publish with id "${publish_id}"` })
        } else {
            await publish.destroy()
            res.json(publish)
        }
    }
})

router.post('/:publish_id/comments', async (req, res) => {
    const publish_id = Number(req.params.publish_id)

    req.body.like = req.body.like ? true : false

    const publish = await Publish.findOne({
        where: { publish_id: publish_id }
    })

    if (!publish) {
        return res.status(404).json({ message: `Could not find publish with id "${publish_id}"` })
    }

    if (!req.currentUser) {
        return res.status(404).json({ message: `You must be logged in.` })
    }

    const comment = await Comment.create({
        ...req.body,
        author_id: req.currentUser.user_id,
        publish_id: publish_id
    })

    res.send({
        ...comment.toJSON(),
        author: req.currentUser
    })
})

router.delete('/:publish_id/comments/:commentId', async (req, res) => {
    let publish_id = Number(req.params.publish_id)
    let commentId = Number(req.params.commentId)

    if (isNaN(publish_id)) {
        res.status(404).json({ message: `Invalid id "${publish_id}"` })
    } else if (isNaN(commentId)) {
        res.status(404).json({ message: `Invalid id "${commentId}"` })
    } else {
        const comment = await Comment.findOne({
            where: { commentId: commentId, publish_id: publish_id }
        })
        if (!comment) {
            res.status(404).json({ message: `Could not find comment with id "${commentId}" for publish with id "${publish_id}"` })
        } else if (comment.authorId !== req.currentUser?.user_id) {
            res.status(403).json({ message: `You do not have permission to delete comment "${comment.commentId}"` })
        } else {
            await comment.destroy()
            res.json(comment)
        }
    }
})


module.exports = router