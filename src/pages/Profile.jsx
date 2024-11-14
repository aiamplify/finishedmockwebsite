import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { currentUser, updateUserProfile } = useAuth();
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [profile, setProfile] = useState({
    name: currentUser?.displayName || '',
    email: currentUser?.email || '',
    company: 'Stream Co',
    plan: 'Pro'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile update:', profile);
  };

  const handleChange = (e) => {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const storageRef = ref(storage, `profile-pictures/${currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await updateUserProfile({ photoURL: downloadURL });
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-white/60">Manage your account preferences</p>
        </div>
        <Link
          to="/dashboard"
          className="bg-purple-600/30 text-white px-6 py-2 rounded-lg hover:bg-purple-600/50 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
      >
        <div className="flex justify-center mb-8">
          <div className="relative group cursor-pointer" onClick={handleImageClick}>
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/20">
              <img
                src={currentUser?.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser?.email}`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm">Change Photo</span>
            </div>
            {uploading && (
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 mb-2 text-sm" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full bg-purple-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full bg-purple-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/80 mb-2 text-sm" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={profile.company}
              onChange={handleChange}
              className="w-full bg-purple-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>

          <div>
            <label className="block text-white/80 mb-2 text-sm">
              Current Plan
            </label>
            <div className="flex items-center justify-between bg-purple-900/50 border border-purple-500/20 rounded-lg px-4 py-3">
              <div className="text-white">{profile.plan}</div>
              <button
                type="button"
                className="text-purple-400 hover:text-purple-300 text-sm"
              >
                Upgrade Plan
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-purple-500/20">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 rounded-lg font-medium shadow-lg shadow-purple-500/20 hover:from-purple-500 hover:to-purple-400 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 bg-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
      >
        <h2 className="text-xl font-bold text-white mb-6">Security Settings</h2>
        <div className="space-y-6">
          <button
            type="button"
            className="w-full bg-purple-900/50 text-white py-3 rounded-lg font-medium border border-purple-500/20 hover:bg-purple-900/70 transition-colors text-left px-4"
          >
            Change Password
          </button>
          <button
            type="button"
            className="w-full bg-purple-900/50 text-white py-3 rounded-lg font-medium border border-purple-500/20 hover:bg-purple-900/70 transition-colors text-left px-4"
          >
            Two-Factor Authentication
          </button>
          <button
            type="button"
            className="w-full bg-purple-900/50 text-white py-3 rounded-lg font-medium border border-purple-500/20 hover:bg-purple-900/70 transition-colors text-left px-4"
          >
            Connected Devices
          </button>
        </div>
      </motion.div>
    </div>
  );
}