import './App.css';

const Contact = () => {
  return (
    <div className="flex flex-col justify-start h-screen p-4 items-center">
      <h1 className="font-bold text-7xl mb-8">Know Me Better! 🚀</h1>
       <p className="font-bold text-2xl text-white">I have been solving DSA questions on Leetcode and GeeksForGeeks. </p>
       <p className="font-bold text-2xl text-white"> I have added the projects on my Github Account. </p> 
       <p className="font-bold text-2xl text-white ">Connect with me on LinkedIn.</p>

         <img 
          src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
          alt="Travel Animation" 
          className="w-96 rounded-lg shadow-md" 
        />

      <div className="space-x-10  flex">
        {/* LinkedIn */}
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn Logo"
            className="w-10 h-10"
          />
          <a
            href="https://www.linkedin.com/in/tamanna-sheikh-66bba2276/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-2xl font-semibold"
          >
            LinkedIn
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub Logo"
            className="w-10 h-10"
          />
          <a
            href="https://github.com/TAMANNA230904"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-700 text-2xl font-semibold"
          >
            GitHub
          </a>
        </div>

        {/* GeeksforGeeks */}
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
            alt="GeeksforGeeks Logo"
            className="w-10 h-10"
          />
          <a
            href="https://www.geeksforgeeks.org/user/tamannashi5kn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 text-2xl font-semibold"
          >
            GeeksforGeeks
          </a>
        </div>

        {/* LeetCode */}
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode Logo"
            className="w-10 h-10"
          />
          <a
            href="https://leetcode.com/u/tamannasheikh2304/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:text-yellow-800 text-2xl font-semibold"
          >
            LeetCode
          </a>
        </div>
        

      </div>
    </div>
  );
};

export default Contact;
