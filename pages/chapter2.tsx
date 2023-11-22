import Layout from '@/components/Layout';
import PageCard from '@/components/PageCard';
import chapter from '@/constants/chapter.json';
import '../app/globals.css';

import Chessboard from '@/components/exercises/chapter-2-oscar/Chessboard';
import FizzBuzz from '@/components/exercises/chapter-2-oscar/FizzBuzz';
import Pyramid from '@/components/exercises/chapter-2-oscar/Pyramid';
import JChessBoard from '@/components/exercises/chapter-2/JChessBoard';
import JFizzBuzz from '@/components/exercises/chapter-2/JFizzBuzz';
import JPyramid from '@/components/exercises/chapter-2/JPyramid';

/**
 * Renders the content for Chapter 2 page.
 * @returns JSX element
 */
export default function Chapter2() {
  // Find the chapter details from the chapter.json file
  const chapterId = 2;
  const chapterMatch = chapter.find((chapter) => chapter.id === chapterId);

  if (!chapterMatch) {
    throw new Error(`Chapter ${chapterId} not found`);
  }

  const { title, subtitle, details, devOscar, devJon } = chapterMatch;

  return (
    <Layout>
      <div className=' relative z-0 mx-auto mb-2 flex max-w-[1440px] gap-5 xl:flex-col'>
        <div className='max-width px-6 pt-36'>
          <h1 className='text-4xl font-extrabold'>{title}</h1>
          <h2 className='mt-5 text-[27px] font-light text-black-100'>
            {subtitle}
          </h2>
          <p>{details}</p>
        </div>

        <div className='relative z-0 mx-auto flex max-w-[1440px] flex-col gap-5 xl:flex-row'>
          <div className='flex flex-col'>
            {devOscar && (
              <>
                <PageCard
                  id={devOscar[0].id}
                  title={devOscar[0].title}
                  details={devOscar[0].details}
                  code={() => <Pyramid rows={0} />}
                />
                <PageCard
                  id={devOscar[1].id}
                  title={devOscar[1].title}
                  details={devOscar[1].details}
                  code={() => <FizzBuzz phraseValue={''} />}
                />
                <PageCard
                  id={devOscar[2].id}
                  title={devOscar[2].title}
                  details={devOscar[2].details}
                  code={() => <Chessboard size={8} />}
                />
              </>
            )}
          </div>
          <div className='flex flex-col'>
            {devJon && (
              <>
                <PageCard
                  id={devJon[0].id}
                  title={devJon[0].title}
                  details={devJon[0].details}
                  code={() => <JPyramid />}
                />
                <PageCard
                  id={devJon[1].id}
                  title={devJon[1].title}
                  details={devJon[1].details}
                  code={() => <JFizzBuzz />}
                />
                <PageCard
                  id={devJon[2].id}
                  title={devJon[2].title}
                  details={devJon[2].details}
                  code={() => <JChessBoard />}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
