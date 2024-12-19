import Image from 'next/image';

const BlogCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Image
          src="/path-to-your-image.jpg" // Replace with your image path
          alt="Blog Post Image"
          className="w-full h-64 object-cover"
          width={500}
          height={300}
        />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-bold py-1 px-3 rounded">
          <p className="text-center">14</p>
          <p className="text-center uppercase">Feb</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Metadata */}
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <p className="flex items-center">
            <span className="mr-1">📅</span> Feb 14, 2022
          </p>
          <p className="flex items-center">
            <span className="mr-1">💬</span> 3
          </p>
          <p className="flex items-center">
            <span className="mr-1">👤</span> Admin
          </p>
        </div>

        {/* Title */}
        <h2 className="mt-2 text-xl font-bold text-gray-800">
          10 Reasons To Do A Digital Detox Challenge
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-600 text-sm">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...
        </p>

        {/* Read More Button */}
        <div className="mt-4">
          <a
            href="#"
            className="inline-block text-orange-500 hover:text-orange-600 text-sm font-medium underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
