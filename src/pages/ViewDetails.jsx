import { useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";

const ViewDetails = () => {
  const loadedViewDetailsBook = useLoaderData();
  console.log(loadedViewDetailsBook);

  const { _id, image } = loadedViewDetailsBook;

  return (
    <div>
      <div>
        {/* category product  */}
        <div className="card p-6 bg-white shadow-md ">
          <figure className="px-10 pt-10   border">
            <img
              src={image}
              alt="categoryName"
              className="rounded-x w-full h-56"
            />
          </figure>
          <hr className="mt-6 " />
          <Modal></Modal>
          <div className="card-body  text-center  shadow-md ">
            <p className="text-medium text-left font-light text-black ">
              A library is a treasure trove of knowledge, a sanctuary for book
              enthusiasts, and a hub of intellectual exploration. In its
              essence, a library is more than just a physical space filled with
              books; it is a vibrant hub that fosters learning, creativity, and
              community engagement. Within the walls of a library, one can
              discover a vast collection of books spanning various genres, from
              timeless classics and contemporary literature to academic texts
              and research journals. These books serve as windows to different
              worlds, offering readers the opportunity to explore diverse
              cultures, historical events, scientific discoveries, and
              imaginative realms. Libraries play a pivotal role in education,
              providing resources for students, researchers, and lifelong
              learners. They offer access to a wide array of informational
              materials, including digital resources, audiobooks, and multimedia
              content, catering to different learning preferences. Moreover,
              libraries often host workshops, lectures, and book clubs,
              fostering a sense of camaraderie among readers and encouraging
              intellectual discussions. Beyond their educational significance,
              libraries serve as community hubs, promoting social interaction
              and cultural enrichment. They provide a safe and quiet space for
              studying, research, and personal reflection. Additionally,
              libraries often organize events, art exhibitions, and storytelling
              sessions for children, making them inclusive spaces for people of
              all ages. In the digital age, many libraries have embraced
              technology, offering online catalogs, e-books, and virtual
              services, ensuring that knowledge is accessible to a broader
              audience. Librarians, the unsung heroes of libraries, assist
              patrons in finding relevant resources, conducting research, and
              navigating the vast world of information. Ultimately, a library is
              a beacon of enlightenment, fostering a love for reading, nurturing
              curiosity, and promoting lifelong learning. It stands as a
              testament to the power of words, ideas, and the enduring
              importance of education in shaping a well-informed society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
