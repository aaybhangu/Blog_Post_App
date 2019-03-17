import React from "react";
import { connect } from "react-redux";
import { fatchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fatchPosts();
  }
  renderPostsData() {
    if (!this.props.postsData) {
      return <p>Loading Posts .....</p>;
    } else {
      return this.props.postsData.map(post => {
        return (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <ul>{this.renderPostsData()}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    postsData: state.posts
  };
};
export default connect(
  mapStateToProps,
  { fatchPosts }
)(PostList);
