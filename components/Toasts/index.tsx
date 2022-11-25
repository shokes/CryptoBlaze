import toast from 'react-hot-toast';

export const addedAlert = (coin: string) => {
  toast.custom((toast) => (
    <div
      className={`mb-2 flex items-center gap-3 bg-[#2b8a3e] px-8 font-semibold py-3 rounded text-xs uppercase text-[#fff] ${
        toast.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <span>{coin} added to portfolio</span>
    </div>
  ));
};

export const removedAlert = (coin: string) => {
  toast.custom((toast) => (
    <div
      className={`mb-2 flex items-center gap-3 bg-[#c92a2a] px-8 py-3 rounded font-semibold  text-xs uppercase text-[#fff] ${
        toast.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <span>{coin} removed from portfolio</span>
    </div>
  ));
};
