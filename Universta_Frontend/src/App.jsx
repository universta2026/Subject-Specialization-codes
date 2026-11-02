import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Drawer from './components/layout/Drawer';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import SubjectDetail from './pages/SubjectDetail';
import SpecializationDetail from './pages/SpecializationDetail';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Universities from './pages/Universities';
import UniversityDetail from './pages/UniversityDetail';
import UniversityCourseDetail from './pages/UniversityCourseDetail';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Scholarships from './pages/Scholarships';
import ScholarshipDetail from './pages/ScholarshipDetail';
import LevelDetail from './pages/LevelDetail';
import Exams from './pages/Exams';
import ExamDetail from './pages/ExamDetail';
import Visa from './pages/Visa';
import VisaDetail from './pages/VisaDetail';
import Coaching from './pages/Coaching';
import Consultants from './pages/Consultants';
import ExpertDetail from './pages/ExpertDetail';
import AllPages from './pages/AllPages';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Subjects & Specializations */}
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/:id" element={<SubjectDetail />} />
        <Route path="/subjects/:id/:level" element={<LevelDetail />} />
        <Route path="/specializations/:id" element={<SpecializationDetail />} />
        <Route path="/specializations/:id/:level" element={<LevelDetail />} />

        {/* Destinations */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetail />} />

        {/* Student Visa */}
        <Route path="/student-visa" element={<Visa />} />
        <Route path="/student-visa/:id" element={<VisaDetail />} />

        {/* Universities */}
        <Route path="/universities" element={<Universities />} />
        <Route path="/universities/:id" element={<UniversityDetail />} />
        <Route path="/universities/:id/courses/:courseId" element={<UniversityCourseDetail />} />
        <Route path="/universities/:id/scholarships/:scholarshipId" element={<ScholarshipDetail />} />

        {/* Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses/:id/:level" element={<LevelDetail />} />

        {/* Scholarships */}
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/scholarships/:id" element={<ScholarshipDetail />} />
        <Route path="/scholarships/:id/:level" element={<LevelDetail />} />

        {/* Exams */}
        <Route path="/exams" element={<Exams />} />
        <Route path="/exams/:id" element={<ExamDetail />} />

        {/* Coaching */}
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/coaching/:id" element={<ExpertDetail />} />

        {/* Study Abroad Consultants */}
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/consultants/:id" element={<ExpertDetail />} />

        {/* Sitemap & 404 */}
        <Route path="/pages" element={<AllPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
