import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FYPNews = () => {
  const navigation = useNavigation();

  // Sample posts data (this can be replaced with real data from a backend or API)
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'FYP Project 1: AI in Healthcare',
      content: 'This project explores how AI is transforming the healthcare industry by predicting disease outbreaks.',
      likes: 15,
      comments: ['Great project!', 'Very informative!'],
    },
    {
      id: '2',
      title: 'FYP Project 2: Blockchain for Data Security',
      content: 'This project focuses on utilizing blockchain technology to enhance data security in cloud computing.',
      likes: 25,
      comments: ['Awesome idea!', 'Blockchain is the future!'],
    },
    {
      id: '3',
      title: 'FYP Project 3: Renewable Energy Solutions',
      content: 'This project aims to develop more efficient renewable energy solutions for remote areas.',
      likes: 30,
      comments: ['This is amazing!', 'I hope this can make a big impact!'],
    },
  ]);

  // State for user input for new posts or comments
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (postId) => {
    if (newComment.trim()) {
      const updatedPosts = posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      );
      setPosts(updatedPosts);
      setNewComment(''); // Clear the input after submission
    }
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content}</Text>

      <View style={styles.postActions}>
        <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.likeButton}>
          <Text style={styles.likeButtonText}>Like ({item.likes})</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          placeholderTextColor="#aaa"
          value={newComment}
          onChangeText={setNewComment}
        />

        <TouchableOpacity
          style={styles.commentButton}
          onPress={() => handleAddComment(item.id)}
        >
          <Text style={styles.commentButtonText}>Post Comment</Text>
        </TouchableOpacity>

        <Text style={styles.commentsTitle}>Comments:</Text>
        {item.comments.map((comment, index) => (
          <Text key={index} style={styles.commentText}>
            - {comment}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>FYP News</Text>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* FYP News Feed */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131619',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#4D62E5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    width: 100,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  post: {
    backgroundColor: '#232F3E',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  postTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postContent: {
    color: '#ddd',
    fontSize: 16,
    marginBottom: 15,
  },
  postActions: {
    flexDirection: 'column',
  },
  likeButton: {
    backgroundColor: '#4D62E5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  likeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  commentInput: {
    backgroundColor: '#232F3E',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  commentButton: {
    backgroundColor: '#4D62E5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  commentButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  commentsTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  commentText: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default FYPNews;
