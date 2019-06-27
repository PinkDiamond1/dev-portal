import Button from 'components/Button';
import Typography from 'components/Typography';
import React from 'react';


const JoinLeft = () => {
  return (
    <>
      <Typography className='carousel-text' size='L'>
        OmiseGO Developer Portal
      </Typography>
      <Typography className='carousel-text' size='XL' bold>
        {'Join the OmiseGO\nDevelopers Program'}
      </Typography>
      <Typography className='carousel-text' color='text'>
        {'Be the first to know about all the development updates and get\nthe chance to try out the latest features, tools, and libraries, plus\nthe chance to talk to OmiseGO Product and Engineering team.'}
      </Typography>
      <Button href='https://omisego-odp.typeform.com/to/T8dDjF'>
        Sign Up Now
      </Button>
    </>
  )
}

export default JoinLeft;
