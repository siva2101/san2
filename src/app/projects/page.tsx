'use client';

import { projects } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const allCategories = projects.map(p => p.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('All');
    }
  }, [categoryParam]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      router.push('/projects', { scroll: false });
    } else {
      router.push(`/projects?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-screen-xl mx-auto py-20 px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our portfolio of architectural designs and innovations, where every structure tells a story of purpose and precision.
          </p>
        </motion.div>

        {/* Filter Panels */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default function OurProjects() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  )
}
