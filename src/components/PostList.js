import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }
  renderPostsData() {
    if (!this.props.postsData) {
      return <p>Loading Posts .....</p>;
    } else {
      return this.props.postsData.map(post => {
        return (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="discription">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <UserHeader userId={post.userId} />
              </div>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="ui relexed divided list">{this.renderPostsData()}</div>
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
  { fetchPostAndUsers }
)(PostList);
