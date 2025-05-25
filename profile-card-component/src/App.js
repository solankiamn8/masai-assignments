import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <ProfileCard 
        name="John Doe" 
        age={28} 
        bio="I am a software developer with over 7 years of experience in full-stack development. Passionate about learning new technologies and building meaningful projects that solve real problems." 
      />

      <ProfileCard 
        age={30}  // No name or bio given — will use defaults
      />
    </div>
  );
}

export default App;
