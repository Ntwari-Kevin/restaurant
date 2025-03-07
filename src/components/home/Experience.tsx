
import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";

const Experience = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Sample video data
  const videos = [
    {
      id: 1,
      title: "The CKYC Experience",
      description: "Experience the ambiance and energy of our lounge",
      thumbnail: "https://images.unsplash.com/photo-1539053141881-5b322bec191d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    },
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="section-padding bg-ckyc-charcoal text-white relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-ckyc-gold font-medium">Feel the Atmosphere</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Experience CKYC Lounge
          </h2>
          <p className="text-white/80">
            Step into the vibrant atmosphere of Kigali's premier dining destination. 
            From fine dining to our signature cocktails, immerse yourself in the full experience.
          </p>
        </div>
        
        {/* Video Player */}
        <div className={`max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative aspect-video">
            {/* Video Thumbnail */}
            <img
              src={videos[0].thumbnail}
              alt={videos[0].title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isPlaying ? "opacity-0" : "opacity-100"
              }`}
            />
            
            {/* Video */}
            <video
              ref={videoRef}
              src={videos[0].videoUrl}
              className="w-full h-full object-cover"
              poster={videos[0].thumbnail}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            ></video>
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 transition-opacity duration-300 hover:bg-black/40"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className={`p-5 rounded-full bg-ckyc-gold/90 text-white transition-transform duration-300 hover:scale-110 ${
                isPlaying ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}>
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </div>
            </button>
          </div>
          
          {/* Video Info */}
          <div className="p-6 bg-ckyc-charcoal border-t border-white/10">
            <h3 className="text-xl font-semibold mb-2">{videos[0].title}</h3>
            <p className="text-white/70">{videos[0].description}</p>
          </div>
        </div>
        
        {/* Additional Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Exclusive Ambiance", "Culinary Excellence", "Premium Service"].map((item, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-16 h-16 bg-ckyc-gold/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <div className="w-10 h-10 bg-ckyc-gold rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
