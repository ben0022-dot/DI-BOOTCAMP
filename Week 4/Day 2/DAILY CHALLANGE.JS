// Create a class called Video. The class should be constructed with the following parameters: title, uploader, time.

class Video {
  constructor(title, uploader, time) {
	this.title = title;
	this.uploader = uploader;
	this.time = time;
  }
}
//Create a method called watch() which displays a string as follows:
//“uploader parameter watched all time parameter of title parameter!”
    watch()
    {
      return `${this.uploader} watched all ${this.time} of ${this.title}!`;
    }
//Instantiate a new Video instance and call the watch() method.

const myVideo = new Video("How to Code", "John Doe", "10 minutes");
console.log(myVideo.watch());
//Instantiate a second Video instance with different values.
const myVideo2 = new Video("JavaScript Basics", "Jane Smith", "15 minutes");
console.log(myVideo2.watch());
// Use an array to store data for five Video instances (ie. title, uploader, time)
// The best data structure to save this information within the array is an array of objects, where each object represents a Video instance.
const videos = [
  new Video("How to Code", "John Doe", "10 minutes"),
  new Video("JavaScript Basics", "Jane Smith", "15 minutes"),
  new Video("Advanced JavaScript", "Bob Johnson", "20 minutes"),
  new Video("Python for Beginners", "Alice Williams", "25 minutes"),
  new Video("Web Development Fundamentals", "Charlie Brown", "30 minutes")
];

videos.forEach(video => console.log(video.watch()));
//Loop through the array to instantiate those instances.


