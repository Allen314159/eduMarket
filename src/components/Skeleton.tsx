const ProductSkeleton = () => {
  return (
    <div className="card animate-pulse">
      <div className="skeleton h-48 w-full"></div>
      <div className="p-4 space-y-3">
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-3 w-full"></div>
        <div className="skeleton h-3 w-2/3"></div>
        <div className="flex items-center justify-between">
          <div className="skeleton h-6 w-20"></div>
          <div className="skeleton h-8 w-24"></div>
        </div>
        <div className="flex gap-2">
          <div className="skeleton h-5 w-12"></div>
          <div className="skeleton h-5 w-16"></div>
          <div className="skeleton h-5 w-14"></div>
        </div>
      </div>
    </div>
  );
};

const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};

const SearchSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="skeleton h-10 w-full"></div>
        </div>
        <div className="skeleton h-10 w-32"></div>
        <div className="skeleton h-10 w-32"></div>
        <div className="skeleton h-10 w-32"></div>
      </div>
      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
        <div className="skeleton h-6 w-20"></div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="skeleton h-6 w-16"></div>
        ))}
      </div>
    </div>
  );
};

const ModalSkeleton = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content animate-pulse">
        <div className="skeleton h-64 w-full"></div>
        <div className="p-6 space-y-4">
          <div className="skeleton h-8 w-3/4"></div>
          <div className="skeleton h-4 w-1/2"></div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-3/4"></div>
              <div className="skeleton h-4 w-1/2"></div>
            </div>
            <div className="space-y-3">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-2/3"></div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 border-t">
            <div className="skeleton h-8 w-24"></div>
            <div className="flex gap-3">
              <div className="skeleton h-10 w-32"></div>
              <div className="skeleton h-10 w-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  ProductSkeleton,
  ProductGridSkeleton,
  SearchSkeleton,
  ModalSkeleton
};
