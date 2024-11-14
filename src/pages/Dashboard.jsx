import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', streams: 400 },
  { name: 'Feb', streams: 300 },
  { name: 'Mar', streams: 600 },
  { name: 'Apr', streams: 800 },
  { name: 'May', streams: 700 },
  { name: 'Jun', streams: 900 }
];

const stats = [
  { label: 'Total Streams', value: '3,721' },
  { label: 'Active Viewers', value: '1,203' },
  { label: 'Stream Health', value: '98%' },
  { label: 'Security Score', value: '95%' }
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-white/60">Welcome back, User!</p>
        </div>
        <Link
          to="/profile"
          className="bg-purple-600/30 text-white px-6 py-2 rounded-lg hover:bg-purple-600/50 transition-colors"
        >
          View Profile
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
          >
            <div className="text-white/60 text-sm mb-2">{stat.label}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-2 bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
        >
          <h2 className="text-xl font-bold text-white mb-6">Stream Analytics</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(124,58,237,0.9)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="streams"
                  stroke="#9F7AEA"
                  strokeWidth={2}
                  dot={{ fill: '#9F7AEA' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
        >
          <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-white/80 text-sm"
              >
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div>Stream #{index + 1} completed successfully</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}