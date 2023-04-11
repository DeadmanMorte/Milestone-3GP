const router = require('express').Router()
const db = require('../models')

const {Comment, Publish, User } = db

router.post('/', async (req, res) => {
    
    const publish = await Publish.create(req.body)
    res.json(publish)
})

router.get('/', async (req, res) => {
    const publishs = await Publish.findAll()
    res.json(publishs)
})


router.get('/:publishId', async (req, res) => {
    let publishId = Number(req.params.publishId)
    if (isNaN(publishId)) {
        res.status(404).json({ message: `Invalid id "${publishId}"` })
    } else {
        const publish = await Publish.findOne({
            where: { publishId: publishId },
            include: {
                association: 'comments',
                include: 'author'
            }
        })
        if (!publish) {
            res.status(404).json({ message: `Could not find publish with id "${publishId}"` })
        } else {
            res.json(publish)
        }
    }
})

router.put('/:publishId', async (req, res) => {
    let publishId = Number(req.params.publishId)
    if (isNaN(publishId)) {
        res.status(404).json({ message: `Invalid id "${publishId}"` })
    } else {
        const publish = await Publish.findOne({
            where: { publishId: publishId },
        })
        if (!publish) {
            res.status(404).json({ message: `Could not find publish with id "${publishId}"` })
        } else {
            Object.assign(publish, req.body)
            await publish.save()
            res.json(publish)
        }
    }
})

router.delete('/:publishId', async (req, res) => {
    let publishId = Number(req.params.publishId)
    if (isNaN(publishId)) {
        res.status(404).json({ message: `Invalid id "${publishId}"` })
    } else {
        const publish = await Publish.findOne({
            where: {
                publishId: publishId
            }
        })
        if (!publish) {
            res.status(404).json({ message: `Could not find publish with id "${publishId}"` })
        } else {
            await publish.destroy()
            res.json(publish)
        }
    }
})

router.post('/:publishId/comments', async (req, res) => {
    const publishId = Number(req.params.publishId)

    

    const publish = await Publish.findOne({
        where: { publishId: publishId }
    })

    if (!publish) {
        return res.status(404).json({ message: `Could not find publish with id "${publishId}"` })
    }

    if (!req.currentUser) {
        return res.status(404).json({ message: `You must be logged in.` })
    }

    const comment = await Comment.create({
        ...req.body,
        authorId: req.currentUser.userId,
        publishId: publishId
    })

    res.send({
        ...comment.toJSON(),
        author: req.currentUser
    })
})

router.delete('/:publishId/comments/:commentId', async (req, res) => {
    let publishId = Number(req.params.publishId)
    let commentId = Number(req.params.commentId)

    if (isNaN(publishId)) {
        res.status(404).json({ message: `Invalid id "${publishId}"` })
    } else if (isNaN(commentId)) {
        res.status(404).json({ message: `Invalid id "${commentId}"` })
    } else {
        const comment = await Comment.findOne({
            where: { commentId: commentId, publishId: publishId }
        })
        if (!comment) {
            res.status(404).json({ message: `Could not find comment with id "${commentId}" for publish with id "${publishId}"` })
        } else if (comment.authorId !== req.currentUser?.userId) {
            res.status(403).json({ message: `You do not have permission to delete comment "${comment.commentId}"` })
        } else {
            await comment.destroy()
            res.json(comment)
        }
    }
})


module.exports = router