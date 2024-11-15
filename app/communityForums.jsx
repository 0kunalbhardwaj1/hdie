import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommunityForums = () => {
  const navigation = useNavigation(); // Hook to access the navigation object
  
  const [forumPosts, setForumPosts] = useState([
    { id: '1', title: 'Welcome to the Community Forum!', content: 'Feel free to discuss health topics here.' },
    { id: '2', title: 'New Health Trends 2024', content: 'What are some health trends you are excited about in 2024?' },
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostSubmission = () => {
    if (newPost.trim() === '') {
      alert('Post content cannot be empty.');
      return;
    }

    const newForumPost = {
      id: (forumPosts.length + 1).toString(),
      title: `Post ${forumPosts.length + 1}`,
      content: newPost,
    };

    setForumPosts([newForumPost, ...forumPosts]);
    setNewPost(''); // Clear the input field after posting
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Community Forums</Text>

      <View style={styles.newPostContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your post here..."
          value={newPost}
          onChangeText={setNewPost}
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handlePostSubmission}>
          <Text style={styles.submitButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={forumPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postContent}>{item.content}</Text>
          </View>
        )}
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
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  newPostContainer: {
    backgroundColor: '#2A2E35',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1C1F24',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#4D62E5',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  postContainer: {
    backgroundColor: '#232F3E',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 16,
    color: '#ddd',
  },
});

export default CommunityForums;
