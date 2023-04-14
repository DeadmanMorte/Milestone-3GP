import React from 'react';
import NewComment from "../publishes/NewComment";
import NewPublish from "../publishes/NewPublish"

function Feed() {
  return (
    <div>
      <section className="post">
        <h2>Post a Picture</h2>
        <NewPublish />
      </section>
      <section className="comments">
        <h2>Comments</h2>
        <NewComment />
        <form>
          <input type="text" name="name" placeholder="Name" />
          <textarea name="comment" placeholder="Comment" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>

    </div>
  )
}

export default Feed