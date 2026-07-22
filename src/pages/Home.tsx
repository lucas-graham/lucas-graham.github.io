import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #6c63e4 0%, #e4e8ed 100%)",
          paddingTop: "80px",
          borderRadius: "50px",
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant='h2'
                sx={{
                  fontWeight: 700,
                  marginBottom: 2,
                  color: "#111",
                }}
              >
                Lucas Graham
              </Typography>

              <Typography
                variant='h5'
                sx={{
                  color: "#555",
                  marginBottom: 3,
                  lineHeight: 1.5,
                }}
              >
                Software Engineer • Personal Trainer
              </Typography>

              <Typography
                variant='body1'
                sx={{
                  fontSize: "1.1rem",
                  color: "#666",
                  maxWidth: "600px",
                  marginBottom: 4,
                }}
              >
                Thank you for visiting my site! I am very excited that you're
                here. Check it out, Explore my work, learn about my journey, and
                if you'd like to connect, feel free to reach out! FYI This is a
                work in progress and isn't coplete or the final version of my
                site so please excuse any placeholders or empty sections. :)
              </Typography>
            </Grid>

            {/* Image Placeholder */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  height: 350,
                  borderRadius: 4,
                  backgroundColor: "#ddd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src='../src/assets/profileImage.jpg'
                  alt='Profile'
                  style={{
                    maxHeight: "100%",
                    borderRadius: "10%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Preview */}
      <Container maxWidth='lg'>
        <Box
          sx={{
            py: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant='h3' sx={{ fontWeight: 700, mb: 2 }}>
            About Me
          </Typography>

          <Typography
            variant='body1'
            sx={{
              maxWidth: "750px",
              color: "#555",
              lineHeight: 1.7,
            }}
          >
            Placeholder for a brief introduction. Explain your background,
            interests, and what drives you professionally and personally.
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Grid container spacing={4} sx={{ pb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <FeatureCard
              title='Software Engineering'
              description='Placeholder for your technical experience, projects, and development work.'
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <FeatureCard
              title='Fitness Coaching'
              description='Placeholder for your training philosophy, services, and fitness journey.'
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <FeatureCard
              title='Projects'
              description="Placeholder for apps, experiments, and things you're building."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 3,
        border: "1px solid #ddd",
        height: "100%",
        transition: "0.2s",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <Typography
        variant='h5'
        sx={{
          fontWeight: 600,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      <Typography variant='body2' color='text.secondary'>
        {description}
      </Typography>
    </Box>
  );
};

export default Home;
