export default function BackHero() {
    return (
       <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50" />
          
          {/* Nebulous Blue Blobs */}
          <div className="absolute -top-20 left-1/3 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-200/35 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-purple-200/30 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
    );
}