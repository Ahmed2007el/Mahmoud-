import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RotateCcw, Play, Menu, X } from 'lucide-react';
import { getQuestions, Question } from './data/questions';

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showMapMobile, setShowMapMobile] = useState(false);
  
  useEffect(() => {
    setQuestions(getQuestions());
  }, []);

  const handleStart = () => {
    setStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers({});
    setShowResult(false);
  };

  const handleOptionSelect = (optionKey: string) => {
    if (userAnswers[currentIndex]) return;
    
    setUserAnswers(prev => ({ ...prev, [currentIndex]: optionKey }));
    
    const currentQuestion = questions[currentIndex];
    
    if (optionKey === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(c => c - 1);
    }
  };

  if (!questions.length) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50"><p className="text-slate-500 font-medium">جاري التحميل...</p></div>;
  }

  const optionLabels: Record<string, string> = { 'a': 'أ', 'b': 'ب', 'c': 'ج', 'd': 'د' };

  return (
    <div className="flex h-screen w-full flex-col bg-slate-50 font-sans text-slate-900" dir="rtl">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-4 sm:px-8 shadow-sm">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-800 line-clamp-1">
            امتحان الكيمياء العضوية <span className="text-blue-600 hidden sm:inline">(IUPAC)</span>
          </h1>
        </div>
        {started && !showResult && (
          <div className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
            <button
               onClick={() => setShowMapMobile(true)}
               className="lg:hidden flex h-10 w-10 shrink-0 items-center w-full justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-50"
            >
              <Menu size={18} />
            </button>
            <button 
              onClick={() => setShowResult(true)} 
              className="rounded-full bg-blue-600 px-4 sm:px-6 py-2 text-white shadow-md transition-all hover:bg-blue-700 shrink-0"
            >
              إنهاء الاختبار
            </button>
          </div>
        )}
      </header>

      {/* Mobile Map Modal */}
      <AnimatePresence>
        {showMapMobile && Object.keys(questions).length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50 flex flex-col bg-slate-900/50 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="flex-1 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[85vh] mt-auto"
            >
              <div className="flex items-center justify-between border-b border-slate-100 p-4">
                <h2 className="font-bold text-slate-800">خريطة الأسئلة</h2>
                <button onClick={() => setShowMapMobile(false)} className="text-slate-400 hover:text-slate-600 p-1">
                   <X size={20} />
                </button>
              </div>
              <div className="grid grid-cols-7 sm:grid-cols-10 gap-2 overflow-y-auto p-4 content-start">
                {questions.map((_, i) => {
                    let boxClass = 'aspect-square rounded text-sm flex items-center justify-center font-bold transition-all cursor-pointer ';
                    if (userAnswers[i]) {
                      boxClass += 'bg-green-500 text-white shadow-sm';
                    } else if (i === currentIndex) {
                      boxClass += 'bg-blue-600 text-white ring-2 ring-blue-200 ring-offset-1 shadow-md';
                    } else {
                      boxClass += 'border border-slate-200 text-slate-400 bg-slate-50 hover:bg-slate-100';
                    }
                    return (
                      <button 
                        key={i} 
                        className={boxClass}
                        onClick={() => {
                           setCurrentIndex(i);
                           setShowMapMobile(false);
                        }}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex flex-1 gap-6 overflow-hidden p-4 sm:p-6">
        <AnimatePresence mode="wait">
          {!started ? (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center my-auto border border-slate-100"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
                🧪
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">اختبار الكيمياء العضوية الشامل</h2>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                يحتوي هذا الاختبار على 100 سؤال مبعثر في التسمية النظامية (IUPAC) للمركبات العضوية المختلفة. اختبر معرفتك الآن!
              </p>
              <button
                onClick={handleStart}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-lg shadow-[0_4px_14px_0_rgb(37,99,235,0.39)]"
              >
                <Play size={20} className="fill-current" />
                <span>ابدأ الاختبار الآن</span>
              </button>
            </motion.div>
          ) : showResult ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center my-auto border border-slate-100"
            >
              <div className="mb-8 relative">
                <svg className="w-32 h-32 mx-auto transform -rotate-90 drop-shadow-md">
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#f8fafc" strokeWidth="12" />
                  <motion.circle 
                    cx="64" cy="64" r="56" fill="none" stroke="#2563eb" strokeWidth="12"
                    strokeDasharray={351.8}
                    initial={{ strokeDashoffset: 351.8 }}
                    animate={{ strokeDashoffset: 351.8 - (351.8 * (score / questions.length)) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-slate-800">{score}</span>
                  <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">من {questions.length}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 text-slate-800">
                {score >= 90 ? 'ممتاز جداً! 🌟' : score >= 75 ? 'جيد جداً! 👍' : score >= 50 ? 'جيد، تحتاج للمزيد من المراجعة' : 'حاول مرة أخرى! 📚'}
              </h2>
              <p className="text-slate-500 mb-8 font-medium">
                لقد أجبت بشكل صحيح على <span className="font-bold text-blue-600">{score}</span> سؤال من أصل {questions.length} سؤال.
              </p>
              
              <button
                onClick={handleStart}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-all w-full sm:w-auto shadow-md"
              >
                <RotateCcw size={18} />
                <span>إعادة الاختبار</span>
              </button>
            </motion.div>
          ) : (
            <>
              <aside className="hidden lg:flex w-80 shrink-0 flex-col gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-xl border border-slate-100">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="font-bold text-slate-800">خريطة الأسئلة</h2>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{questions.length} سؤال</span>
                </div>
                <div className="grid flex-1 grid-cols-10 gap-1.5 overflow-y-auto p-1 custom-scrollbar content-start">
                  {questions.map((_, i) => {
                    let boxClass = 'h-6 w-6 rounded text-[10px] flex items-center justify-center font-bold transition-all cursor-pointer hover:opacity-80 ';
                    if (userAnswers[i]) {
                      boxClass += 'bg-green-500 text-white shadow-sm';
                    } else if (i === currentIndex) {
                      boxClass += 'bg-blue-600 text-white ring-2 ring-blue-200 ring-offset-1 shadow-md';
                    } else {
                      boxClass += 'border border-slate-200 text-slate-400 bg-slate-50 hover:bg-slate-100';
                    }
                    return (
                      <button 
                         key={i} 
                         className={boxClass}
                         onClick={() => setCurrentIndex(i)}
                      >
                         {i + 1}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2 flex flex-col gap-2 pt-4 border-t border-slate-100 shrink-0">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className="h-3 w-3 rounded bg-green-500 shadow-sm"></span>
                    <span className="text-slate-500">تمت الإجابة</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className="h-3 w-3 rounded bg-blue-600 shadow-sm"></span>
                    <span className="text-slate-500">السؤال الحالي</span>
                  </div>
                </div>
              </aside>

              <section className="relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-100 max-w-4xl mx-auto w-full">
                <div className="flex flex-1 flex-col p-6 sm:p-12 overflow-y-auto">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600 border border-blue-100 shadow-sm">
                      السؤال {currentIndex + 1}
                    </span>
                    <div className="h-px flex-1 bg-slate-100"></div>
                  </div>

                  <h3 className="mb-10 text-xl sm:text-2xl font-bold leading-relaxed text-slate-800 break-words" dir="ltr">
                    {questions[currentIndex].question.split(' ').map((word, i) => 
                      word.match(/^[A-Za-z0-9_()=\-\[\]]+$/) && word.length > 3 ? (
                        <span key={i} className="inline-block mt-1 font-mono text-blue-700 bg-blue-50/50 px-2 rounded-md border border-slate-200 mx-1">{word}</span>
                      ) : (
                        <span key={i}> {word} </span>
                      )
                    )}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                    {['a', 'b', 'c', 'd'].map((optionKey) => {
                      const optionText = questions[currentIndex].options[optionKey as keyof Question['options']];
                      const isCorrect = optionKey === questions[currentIndex].correctAnswer;
                      const isSelected = userAnswers[currentIndex] === optionKey;
                      const hasAnswered = !!userAnswers[currentIndex];
                      
                      let buttonClass = 'flex items-center gap-4 rounded-xl border-2 p-5 text-right transition-all group ';
                      let markerClass = 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold transition-colors ';
                      let textClass = 'text-lg font-medium ';
                      
                      if (!hasAnswered) {
                        buttonClass += 'border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm cursor-pointer bg-white';
                        markerClass += 'bg-slate-100 group-hover:bg-blue-200 text-slate-600 group-hover:text-blue-800';
                        textClass += 'text-slate-700 group-hover:text-slate-900';
                      } else {
                        buttonClass += 'cursor-default ';
                        if (isCorrect) {
                          buttonClass += 'border-green-500 bg-green-50 z-10 shadow-md';
                          markerClass += 'bg-green-500 text-white shadow-sm';
                          textClass += 'text-green-900 font-bold';
                        } else if (isSelected) {
                          buttonClass += 'border-red-500 bg-red-50 z-10 shadow-md';
                          markerClass += 'bg-red-500 text-white shadow-sm';
                          textClass += 'text-red-900 font-bold';
                        } else {
                          buttonClass += 'border-slate-100 bg-slate-50/50 opacity-60';
                          markerClass += 'bg-slate-200 text-slate-400';
                          textClass += 'text-slate-500';
                        }
                      }

                      if (!optionText) return null;

                      return (
                        <button
                          key={optionKey}
                          onClick={() => handleOptionSelect(optionKey)}
                          disabled={hasAnswered}
                          className={buttonClass}
                          dir="ltr"
                        >
                          <div className={markerClass}>
                            {optionLabels[optionKey]}
                          </div>
                          <span className={textClass}>
                            {optionText}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <footer className="flex shrink-0 items-center justify-between border-t border-slate-100 bg-slate-50/80 p-4 sm:p-6 backdrop-blur-sm">
                  <div className="w-24">
                    <button 
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className={`flex items-center gap-1.5 font-bold transition-colors ${currentIndex > 0 ? 'text-slate-500 hover:text-slate-800 drop-shadow-sm' : 'text-slate-300 cursor-not-allowed hidden sm:flex'}`}
                    >
                      <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                      <span className="hidden sm:inline">السابق</span>
                    </button>
                    {currentIndex > 0 && (
                      <button 
                        onClick={handlePrev}
                        className="sm:hidden flex items-center justify-center h-10 w-10 bg-white border border-slate-200 text-slate-600 rounded-full shadow-sm"
                      >
                         <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                      </button>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-400 hidden sm:block">التقدم</span>
                    <div className="h-2 w-32 sm:w-48 overflow-hidden rounded-full bg-slate-200 border border-slate-300">
                      <motion.div 
                        className="h-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(Object.keys(userAnswers).length / questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-600">
                      {Math.round((Object.keys(userAnswers).length / questions.length) * 100)}%
                    </span>
                  </div>

                  <div className="w-24 flex justify-end">
                    <button 
                      onClick={handleNext}
                      className={`flex items-center gap-1.5 font-bold transition-colors text-blue-600 hover:text-blue-800 drop-shadow-sm`}
                    >
                      <span className="hidden sm:inline">{currentIndex === questions.length - 1 ? 'النتيجة' : 'التالي'}</span>
                      <ArrowRight className="h-5 w-5 transform rotate-180" strokeWidth={2.5} />
                    </button>
                  </div>
                </footer>
              </section>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}



