import React, { useEffect, useState } from 'react';
import { Track } from '../types/spotify';
import { getAccessToken, fetchTopTracks } from '../utils/spotify';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp'; // Import the SlideUp component

const Hobbies: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);

  function isErrorWithMessage(error: unknown): error is { message: string } {
    return typeof error === 'object' && error !== null && 'message' in error;
  }

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const token = await getAccessToken();

        if (token) {
          localStorage.setItem('spotify_access_token', token);
        } else {
          console.error('Failed to retrieve access token.');
          return;
        }

        const topTracks = await fetchTopTracks(token);
        setTracks(topTracks.slice(0, 5)); // Only set the first 5 tracks
      } catch (error) {
        if (isErrorWithMessage(error)) {
          console.error('Error message:', error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
    };

    fetchTracks();
  }, []);

  return (
    <section id="hobbies">
      <h1 className="my-10 text-center font-bold text-4xl">
        Hobbies
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      {/* Coffee Section */}
      <div className="coffee-section my-20">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center">
          {/* Video Placeholder */}
          <div className="mt-4 md:w-1/2">
            <video
              controls
              className="rounded-xl shadow-xl w-full"
              poster="/coffee-placeholder.jpg" // Add a placeholder image for the video
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Coffee Description */}
          <div className="mt-4 md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Coffee Enthusiast</h2>
            <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              My passion for coffee goes beyond just drinking it—it's about the experience, the craft, and the stories behind every cup. I enjoy experimenting with different brewing techniques, from pour-over to espresso, French press to AeroPress. Each method brings out unique flavors and aromas, making every brew an adventure.
            </p>
            <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              I also have a deep love for trying new and unique coffee beans from around the world. Whether it's a fruity Ethiopian roast or a bold Brazilian blend, discovering the nuances of different beans is always exciting.
            </p>
            <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              Beyond brewing at home, I love exploring local coffee shops wherever I go. Each shop tells a story through its ambiance, its baristas, and, of course, its coffee. From cozy corners in small towns to trendy cafes in bustling cities, every visit is a chance to discover something new.
            </p>
          </div>
        </div>
      </div>

      {/* Sports Section */}
      <div className="sports-section my-20">
        {/* Pickleball */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-16">
          <div className="mt-4 md:w-1/2">
            <video
              controls
              className="rounded-xl shadow-xl w-full"
              poster="/pickleball-placeholder.jpg" // Placeholder image
            >
              <source src="/pickleball-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4 md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Pickleball</h2>
            <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              I got into pickleball more recently with family and friends. It's been a fun and active way to stay connected and competitive. While I’m not very good yet, hovering around a 2.0 rating, I enjoy every match and continue to improve my skills!
            </p>
          </div>
        </div>

        {/* Bowling */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-16">
          <div className="mt-4 md:w-1/2">
            <video
              controls
              className="rounded-xl shadow-xl w-full"
              poster="/bowling-placeholder.jpg" // Placeholder image
            >
              <source src="/bowling-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4 md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Bowling</h2>
            <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              Bowling has been a part of my life for as long as I can remember. Recently, I’ve been playing more with family, and I maintain an average score of around 175. It’s a perfect mix of competition and relaxation, and I love the camaraderie it fosters.
            </p>
          </div>
        </div>

        {/* General Sports Watching */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center">
          <div className="mt-4 md:w-1/2">
            <Image
              src="/sports-placeholder.jpg" // Placeholder image
              alt="Sports Watching"
              width={800}
              height={500}
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="mt-4 md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Sports Watching</h2>
            <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              I am an avid sports watcher and love discussing and analyzing games. Whether it’s basketball, football, or any other sport, I enjoy keeping up with the action and sharing my thoughts with fellow fans. Watching sports is a regular and exciting part of my life.
            </p>
          </div>
        </div>
      </div>

      {/* Music Section */}
      <section className="music-section">
        <h1 className="my-6 text-center font-bold text-2xl">
          Check out some of my favorite songs below!
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-20">
          {tracks.map((track, idx) => (
            <SlideUp key={idx} offset="-300px 0px -300px 0px">
              <div className="flex flex-col md:flex-row md:space-x-12 items-center">
                <div className="mt-4 md:w-1/2">
                  <Link href={track.external_urls.spotify}>
                    <Image
                      src={track.album.images?.[0]?.url || '/default-image.jpg'}
                      alt={track.name}
                      width={400} // Reduced width
                      height={400} // Reduced height
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-4 md:w-1/2">
                  <h1 className="text-3xl font-bold mb-6">{track.name}</h1>
                  <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    by {track.artists.map((artist) => artist.name).join(', ')}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={track.external_urls.spotify} target="_blank">
                      <span className="text-teal-500 underline hover:opacity-80 cursor-pointer">
                        Listen on Spotify
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hobbies;
