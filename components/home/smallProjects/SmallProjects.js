import Link from 'next/link';

const SmallProjects = () => {
  return (
    <div className='bg-gray-200 flex flex-col '>
      {projectsData.map(data => {
        return (
          <Link key={data.id} href={data.link}>
            {data.name}
          </Link>
        );
      })}
    </div>
  );
};

const projectsData = [
  { id: 1, name: 'Cards', link: '/cards' },
  { id: 2, name: 'Buttons', link: '/buttons' },
];

export default SmallProjects;
