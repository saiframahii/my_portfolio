import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fafcff]">
      {/* Gradient circles */}
      <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-primary-200/30 to-primary-400/30 blur-3xl animate-blob" />
      <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-l from-primary-200/30 to-primary-300/30 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-[40%] left-[30%] w-[70%] h-[70%] rounded-full bg-gradient-to-t from-primary-200/30 to-primary-400/30 blur-3xl animate-blob animation-delay-4000" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4MCIgaGVpZ2h0PSI2NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICAgIDxwYXRoIGQ9Ik03MzEuMjA3IDY0OS44MDJDOTM1LjQ4NCA2NDkuODAyIDExMDIuMDIgNTA2LjI4NiAxMTAyLjAyIDMyOC41YzAtMTc3Ljc4NC0xNjYuNTM2LTMyMS4zLTM3MC44MTMtMzIxLjNTMzYwLjM5NCAxNTAuNzE2IDM2MC4zOTQgMzI4LjVjMCAxNzcuNzg2IDE2Ni41MzYgMzIxLjMwMiAzNzAuODEzIDMyMS4zMDJ6IiBmaWxsPSIjRjFGNUY5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yNSIvPjwvc3ZnPg==')] bg-repeat opacity-50" />
    </div>
  );
};

export default AnimatedBackground;