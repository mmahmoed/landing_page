import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2
} from 'lucide-react';
import { getTestimonialsData } from '../data/landingData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const testimonials = getTestimonialsData(language);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: language === 'id' ? 'Semua' : 'All' },
    { key: 'Web Development', label: 'Web Development' },
    { key: 'PC Repair & Hardware', label: language === 'id' ? 'Servis PC & Hardware' : 'PC Repair & Hardware' },
    { key: 'Network Infrastructure', label: language === 'id' ? 'Infrastruktur Jaringan' : 'Network Infrastructure' },
  ];

  const filteredTestimonials = selectedCategory === 'all'
    ? testimonials
    : testimonials.filter(item => item.serviceCategory === selectedCategory);

  return (
    <section id="reviews" className="py-24 bg-slate-900/60 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            {t.testimonials.subtitle}
          </p>

          {/* Aggregate Rating Badge */}
          <div className="mt-6 inline-flex items-center gap-4 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs text-slate-300 font-medium">
              <strong className="text-white font-bold">{t.testimonials.satisfactionScore}</strong> {t.testimonials.scoreSubtitle}
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="text-xs text-emerald-400 font-mono hidden sm:inline">
              {t.testimonials.verifiedBadge}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTestimonials.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden group"
            >
              <div className="space-y-4">
                
                {/* Top Row: Stars + Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {review.serviceCategory}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Client Info & Verified Project Tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center font-bold text-xs text-cyan-300">
                    {review.avatarText}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {review.clientName}
                    </div>
                    <div className="text-xs text-slate-400">
                      {review.role}, <span className="text-slate-300 font-medium">{review.company}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <div className="text-[10px] text-slate-500 uppercase font-mono">
                    {language === 'id' ? 'Terselesaikan' : 'Delivered'}
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{review.verifiedProject}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
