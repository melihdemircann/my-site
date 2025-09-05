import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { FaMedium, FaExternalLinkAlt, FaCalendarAlt, FaClock, FaEye, FaHeart, FaBookOpen } from 'react-icons/fa';
import { QuantumAtom, QuantumParticleSystem } from '../components/QuantumComponent';

const BlogPosts = () => {
    const { theme, language } = useTheme();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [firstLanding, setFirstLanding] = React.useState(true);

    const content = {
        tr: {
            title: "Blog Yazılarım",
            subtitle: "Medium'dan alınan blog yazıları ve makaleler",
            readMore: "Devamını Oku",
            readOnMedium: "Medium'da Oku",
            publishedOn: "Yayınlandı",
            readingTime: "Okuma Süresi",
            loading: "Blog yazıları yükleniyor...",
            error: "Blog yazıları yüklenirken bir hata oluştu",
            noPosts: "Henüz blog yazısı bulunamadı",
            minutes: "dakika",
            featured: "Öne Çıkan Yazılar",
            allPosts: "Tüm Yazılar"
        },
        en: {
            title: "My Blog Posts",
            subtitle: "Blog posts and articles from Medium",
            readMore: "Read More",
            readOnMedium: "Read on Medium",
            publishedOn: "Published on",
            readingTime: "Reading Time",
            loading: "Loading blog posts...",
            error: "Error occurred while loading blog posts",
            noPosts: "No blog posts found yet",
            minutes: "minutes",
            featured: "Featured Posts",
            allPosts: "All Posts"
        }
    };

    const text = content[language];

    // Medium RSS feed URL
const MEDIUM_RSS_URL = 'https://medium.com/feed/@melih.demircan00';
    const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

    useEffect(() => {
        const fetchMediumPosts = async () => {
            try {
                setLoading(true);
                
                // Medium RSS feed'ini CORS proxy ile al
                const response = await fetch(`${CORS_PROXY}${encodeURIComponent(MEDIUM_RSS_URL)}`);
                
                if (!response.ok) {
                    throw new Error('Medium RSS feed could not be fetched');
                }

                const xmlText = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                
                const items = xmlDoc.querySelectorAll('item');
                const blogPosts = [];

                items.forEach((item, index) => {
                    const title = item.querySelector('title')?.textContent || '';
                    const link = item.querySelector('link')?.textContent || '';
                    const description = item.querySelector('description')?.textContent || '';
                    const pubDate = item.querySelector('pubDate')?.textContent || '';
                    const creator = item.querySelector('creator')?.textContent || '';
                    const guid = item.querySelector('guid')?.textContent || '';
                    
                    // Extract content from description (Medium puts full content in description)
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = description;
                    const textContent = tempDiv.textContent || tempDiv.innerText || '';
                    
                    // Calculate reading time (approximately 200 words per minute)
                    const wordCount = textContent.split(' ').length;
                    const readingTime = Math.ceil(wordCount / 200);
                    
                    // Extract image from content
                    const imageMatch = description.match(/<img[^>]+src="([^">]+)"/);
                    const image = imageMatch ? imageMatch[1] : null;
                    
                    // Clean description for preview
                    const cleanDescription = textContent.substring(0, 200) + (textContent.length > 200 ? '...' : '');

                    blogPosts.push({
                        id: guid || index,
                        title: title.replace(/<!\[CDATA\[|\]\]>/g, ''),
                        link,
                        description: cleanDescription,
                        fullDescription: description,
                        pubDate: new Date(pubDate),
                        creator,
                        readingTime,
                        image,
                        wordCount
                    });
                });

                // Sort by publication date (newest first)
                blogPosts.sort((a, b) => b.pubDate - a.pubDate);
                
                setPosts(blogPosts);
            } catch (err) {
                console.error('Error fetching Medium posts:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMediumPosts();
    }, []);

    useEffect(() => {
        setFirstLanding(false);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const featuredPosts = posts.slice(0, 3);
    const otherPosts = posts.slice(3);

    return (
        <div className={`min-h-screen py-20 px-4 relative ${theme === 'dark'
            ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-black'
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
            }`}>
            <QuantumParticleSystem />
            <QuantumAtom top="10%" left="5%" delay="0s" />
            <QuantumAtom top="30%" right="8%" delay="2s" />
            <QuantumAtom bottom="25%" left="10%" delay="4s" />
            <QuantumAtom bottom="40%" right="5%" delay="1.5s" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        className={`text-5xl md:text-6xl font-bold mb-6 lightning-text ${theme === 'dark'
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
                            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600'
                            }`}
                        style={{
                            textShadow: theme === 'dark' ? '0 0 30px rgba(0, 255, 255, 0.3)' : 'none'
                        }}
                    >
                        {text.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: firstLanding ? 0.2 : 0 }}
                        className={`text-xl ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}`}
                    >
                        {text.subtitle}
                    </motion.p>
                </motion.div>

                {loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className={`inline-block animate-spin rounded-full h-12 w-12 border-b-2 ${theme === 'dark' ? 'border-cyan-400' : 'border-purple-600'
                            }`}></div>
                        <p className={`mt-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}`}>
                            {text.loading}
                        </p>
                    </motion.div>
                )}

                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <div className={`text-6xl mb-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                            ⚠️
                        </div>
                        <p className={`text-xl ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                            {text.error}
                        </p>
                        <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {error}
                        </p>
                    </motion.div>
                )}

                {!loading && !error && posts.length > 0 && (
                    <>
                        {featuredPosts.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: firstLanding ? 0.3 : 0 }}
                                className="mb-16"
                            >
                                <h2 className={`text-4xl font-bold mb-8 text-center lightning-text ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    {text.featured}
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {featuredPosts.map((post, index) => (
                                        <motion.article
                                            key={post.id}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: firstLanding ? 0.5 + index * 0.2 : 0 }}
                                            whileHover={{
                                                scale: 1.02,
                                                boxShadow: theme === 'dark'
                                                    ? '0 25px 50px rgba(0, 255, 255, 0.2)'
                                                    : '0 25px 50px rgba(0, 0, 0, 0.15)'
                                            }}
                                            className={`blog-card group rounded-xl border overflow-hidden transition-all duration-300 ${theme === 'dark'
                                                ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/50'
                                                : 'bg-white/70 border-gray-200 shadow-lg hover:border-purple-400/50'
                                                }`}
                                            style={{
                                                boxShadow: theme === 'dark' ? '0 0 30px rgba(0, 255, 255, 0.1)' : 'none',
                                                backdropFilter: 'blur(20px)',
                                                WebkitBackdropFilter: 'blur(20px)'
                                            }}
                                        >
                                            {post.image && (
                                                <div className="aspect-video overflow-hidden">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                            
                                            <div className="p-6">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className={`p-2 rounded-lg ${theme === 'dark'
                                                        ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20'
                                                        : 'bg-gradient-to-br from-purple-500/20 to-blue-500/20'
                                                        }`}>
                                                        <FaMedium className={`text-xl ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}`} />
                                                    </div>
                                                    <div className="flex items-center gap-4 text-sm">
                                                        <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                                            <FaCalendarAlt />
                                                            <span>{formatDate(post.pubDate)}</span>
                                                        </div>
                                                        <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}`}>
                                                            <FaClock />
                                                            <span>{post.readingTime} {text.minutes}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h3 className={`text-xl font-bold mb-4 line-clamp-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                                    {post.title}
                                                </h3>

                                                <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {post.description}
                                                </p>

                                                <div className="flex gap-3">
                                                    <motion.a
                                                        href={post.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${theme === 'dark'
                                                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
                                                            : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500'
                                                            }`}
                                                    >
                                                        <FaBookOpen className="text-sm" />
                                                        {text.readOnMedium}
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {otherPosts.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: firstLanding ? 1.5 : 0 }}
                            >
                                <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    {text.allPosts}
                                </h2>

                                <div className="space-y-6">
                                    {otherPosts.map((post, index) => (
                                        <motion.article
                                            key={post.id}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            whileHover={{
                                                scale: 1.01,
                                                boxShadow: theme === 'dark'
                                                    ? '0 20px 40px rgba(0, 255, 255, 0.15)'
                                                    : '0 20px 40px rgba(0, 0, 0, 0.1)'
                                            }}
                                            className={`flex gap-6 p-6 rounded-xl border transition-all duration-300 ${theme === 'dark'
                                                ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/50'
                                                : 'bg-white/70 border-gray-200 shadow-lg hover:border-purple-400/50'
                                                }`}
                                            style={{
                                                boxShadow: theme === 'dark' ? '0 0 20px rgba(0, 255, 255, 0.05)' : 'none',
                                                backdropFilter: 'blur(20px)',
                                                WebkitBackdropFilter: 'blur(20px)'
                                            }}
                                        >
                                            {post.image && (
                                                <div className="flex-shrink-0 w-32 h-24 overflow-hidden rounded-lg">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            
                                            <div className="flex-1">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="flex items-center gap-1 text-sm">
                                                        <FaCalendarAlt className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
                                                        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                                            {formatDate(post.pubDate)}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm">
                                                        <FaClock className={theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'} />
                                                        <span className={theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}>
                                                            {post.readingTime} {text.minutes}
                                                        </span>
                                                    </div>
                                                </div>

                                                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                                    {post.title}
                                                </h3>

                                                <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {post.description}
                                                </p>

                                                <a
                                                    href={post.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${theme === 'dark'
                                                        ? 'text-cyan-400 hover:text-cyan-300'
                                                        : 'text-purple-600 hover:text-purple-700'
                                                        }`}
                                                >
                                                    {text.readMore}
                                                    <FaExternalLinkAlt className="text-xs" />
                                                </a>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </>
                )}

                {!loading && !error && posts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <div className={`text-6xl mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}`}>
                            📝
                        </div>
                        <p className={`text-xl ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}`}>
                            {text.noPosts}
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default BlogPosts;