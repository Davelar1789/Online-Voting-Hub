import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import HeroImage from '../assets/hero.jpg';  // Import the hero image
import Secure from '../assets/secure2.jpg'; // Import the secure image
import Profiles from '../assets/profiles.png'; // Import the secure image
import Admins from '../assets/admins.jpg'; // Import the secure image
import Plans from '../components/Plans';


const HomePage = () => {
  const testimonials = [
    {
      topic: "Great Experience",
      quote: "We LOVE the product. I love the new games and new modes that come out. There’s a cool variety of games and having multiple levels make it fun.",
      name: "Dustin Pelletier",
    },
    {
      topic: "Seamless Process",
      quote: "Voting has never been easier. The platform is user-friendly, and the results are instant.",
      name: "Linda James",
    },
    {
      topic: "Highly Secure",
      quote: "Security was our top concern, and this platform exceeded our expectations in maintaining voter confidentiality.",
      name: "Mark Robinson",
    },
    {
      topic: "Efficient Management",
      quote: "As an election manager, the tools provided make managing large-scale elections a breeze.",
      name: "Sophie Anderson",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <Title>Online Election System</Title>
          <Subtitle>Vote wisely and make your voice heard.</Subtitle>
          <ActionButton>Learn More</ActionButton>
        </HeroContent>
      </HeroContainer>

      {/* Responsive Cards Section */}
      <CardSection>
        <SectionTitle>Our Features</SectionTitle>
        <CardContainer>
          <Card>
            <CardImage src={Secure} alt="Secure Voting" />  {/* Use the secure image */}
            <CardText>
              <CardTitle>Secure Voting</CardTitle>
              <CardDescription>
                Our platform ensures secure and confidential voting for all participants.
              </CardDescription>
            </CardText>
          </Card>

          <Card>
            <CardImage src={Profiles} alt="Candidate Profiles" />  {/* Use the secure image */}
            <CardText>
              <CardTitle>Candidate Profiles</CardTitle>
              <CardDescription>
                View detailed information about all the candidates in your area before casting your vote.
              </CardDescription>
            </CardText>
          </Card>

          <Card>
            <CardImage src={Admins} alt="Election Monitoring" />  {/* Use the secure image */}
            <CardText>
              <CardTitle>Election Monitoring</CardTitle>
              <CardDescription>
                Admins have the tools to monitor and manage elections seamlessly.
              </CardDescription>
            </CardText>
          </Card>
        </CardContainer>
      </CardSection>

      <TestimonialSection>
      <SectionTitle>What Our Users Say</SectionTitle>
      <TestimonialCard>
        <Stars>★★★★★</Stars>
        <TestimonialContent key={currentTestimonial}>
          <TestimonialTopic>{testimonials[currentTestimonial].topic}</TestimonialTopic>
          <Quote>{`"${testimonials[currentTestimonial].quote}"`}</Quote>
          <Name>{testimonials[currentTestimonial].name}</Name>
        </TestimonialContent>
        <Navigation>
          <Arrow onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}>&lt;</Arrow>
          <Arrow onClick={() => setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)}>&gt;</Arrow>
        </Navigation>
      </TestimonialCard>
    </TestimonialSection>

      {/* Statistics Section */}
      <StatisticsSection>
        <SectionTitle>Platform Statistics</SectionTitle>
        <StatsGrid>
          <StatCard>
            <StatNumber>500K+</StatNumber>
            <StatText>Registered Voters</StatText>
          </StatCard>
          <StatCard>
            <StatNumber>2K+</StatNumber>
            <StatText>Verified Candidates</StatText>
          </StatCard>
          <StatCard>
            <StatNumber>100+</StatNumber>
            <StatText>Successful Elections</StatText>
          </StatCard>
          <StatCard>
            <StatNumber>99.9%</StatNumber>
            <StatText>System Uptime</StatText>
          </StatCard>
        </StatsGrid>
      </StatisticsSection>

      {/* Benefits Section */}
      <SectionContainer>
        <SectionTitle>Why Use Our Platform?</SectionTitle>
        <BenefitsList>
          <BenefitItem>
            <BenefitIcon>🔒</BenefitIcon>
            <BenefitText>Secure Voting</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>📊</BenefitIcon>
            <BenefitText>Real-time Results</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>💡</BenefitIcon>
            <BenefitText>Candidate Transparency</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>⚙️</BenefitIcon>
            <BenefitText>Easy to Use</BenefitText>
          </BenefitItem>
        </BenefitsList>
      </SectionContainer>
      <Plans />
    </div>
  );
};

// Hero section styling
const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${HeroImage});  /* Use the imported image */
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #87CEEB;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #c5c6c7;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #87CEEB;
  background-color: transparent;
  color: #87CEEB;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #87CEEB;
    color: black;
  }
`;

// Card Section styling
const CardSection = styled.div`
  padding: 60px 20px;
  background-color: #f2f2f2;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  height: 150px;
  object-fit: cover;
  width: 100%;
`;

const CardText = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #87CEEB;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #87CEEB;
`;

// Statistics Section styling
const StatisticsSection = styled.div`
  padding: 60px 20px;
  background-color: #1f2833;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatCard = styled.div`
  background-color: #0b0c10;
  padding: 20px;
  border-radius: 8px;
  width: 180px;
  text-align: center;
  color: #87CEEB;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const StatText = styled.p`
  font-size: 1.1rem;
  color: #c5c6c7;
`;

// Benefits Section styling
const SectionContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
  background-color: #f2f2f2;
  color: black;
`;

const BenefitsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f2833;
  padding: 20px;
  border-radius: 8px;
  width: 180px;
`;

const BenefitIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const BenefitText = styled.p`
  font-size: 1.1rem;
  color: #c5c6c7;
`;

const slideIn = keyframes`
  0% {
    transform: translateX(20%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Testimonial section styling
const TestimonialSection = styled.div`
  padding: 60px 20px;
  background-color: #f2f2f2;
  text-align: center;
`;



const TestimonialCard = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1f2833;
  border-radius: 8px;
  color: #c5c6c7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Stars = styled.div`
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 10px;
`;

const TestimonialContent = styled.div`
  animation: ${slideIn} 1s ease-in-out;
`;

const TestimonialTopic = styled.h3`
  font-size: 1.5rem;
  color: #87CEEB;
`;

const Quote = styled.p`
  font-size: 1.1rem;
  margin: 20px 0;
`;

const Name = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Arrow = styled.button`
  background: none;
  border: none;
  color: #87CEEB;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
  }
`;


export default HomePage;
