import './App.css'
import Card from '@/ui/components/Card';

function App() {
  return (
    <>
      <h1 className="text-6xl font-bold mt-12 mb-4 text-left">
        Neo-Brutalism UI
      </h1>
      <p className='text-left mb-12 text-2xl ml-3'>Neobrutalism is high contrast, bright colors, and bold shapes used for eye-catching statements, UI, web, design.</p>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Card thumbnail='https://neo-brutalism-ui-library.vercel.app/assets/neo-brutalism-image1-2d04a50a.webp' date='Mon 17 Feb' title='What is Neo Brutallism UI?' description='Visit the Getting Started page and learn about its features.' callToActionText='Get Started' callToActionLink='/'/>
        <Card thumbnail='https://neo-brutalism-ui-library.vercel.app/assets/neo-brutalism-image3-fe096ca6.jpg' date='Mon 17 Feb' title='Want to browse the components?' description="Let's take a look at what components are available. You can quickly integrate them into your project with copy and paste." callToActionText='Go to Components Page' callToActionLink='/'/>
        <Card thumbnail='https://neo-brutalism-ui-library.vercel.app/assets/neo-brutalism-image2-cbde41e9.jpg' date='Mon 17 Feb' title='Interested in viewing the code?' description="Get ready for an in-depth exploration of the components in action within the codebase. Let's dive deep into how these components work behind the scenes!" callToActionText='Go to Github Repository' callToActionLink='/'/>
      </div>
      
    </>
  )
}

export default App
