import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Interior() {
  return (
    <div class="h-full w-full sm:w-1/2 pb-20">
        <Card className="box-content" sx={{ width: 1 }}>
            <CardContent className="bg-[#242526]">
                <Typography gutterBottom variant="h5" component="div">
                    <h1 className="text-white text-3xl p-4 md:p-9">Exterior</h1>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    <p className="text-white">Learn more about our services</p>
                </Typography>
            </CardContent>
            <CardMedia
                  component="img"
                  height="100"
                  image="https://firebasestorage.googleapis.com/v0/b/crownclean-41562.appspot.com/o/images%2F1671327787978318489592_632052748713372_1314335038473492075_n.jpg?alt=media&token=b597e134-ad9d-4d52-8648-b292c55c3af0"
                  alt="bmw"
            />
            <CardContent className="bg-[#242526]">
                <Typography variant="body2">
                    <div className="box-content flex flex-col justfiy-center items-center md:flex-row">
                      <div className="w-full flex-col justfiy-center items-center">
                        <li className="text-white p-2">Full front and back face wheel clean. Arches and tyres scrubbed and cleaned and left protected with coatings and dressings.</li>
                        <li className="text-white p-2">A pre wash/snow foam wash in preparation for intricate clean using our soft detailing brushes for intricate areas. Then two bucket, with grit guard wash method.</li>
                        <li className="text-white p-2">Full liquid decontamination process, iron filings and tar removal.</li>
                        <li className="text-white p-2">Car dried using luxury microfibre towels and filtered warm air blower.</li>
                        <li className="text-white p-2">Full IPA wipe down.</li>
                        <li className="text-white p-2">Exhaust polished and protected.</li>
                        <li className="text-white p-2">High grade wax/and or sealant applied.</li>
                        <li className="text-white p-2">Windows cleaned, polished and water repellent applied. (3 months protection) (longer lasting upgrades available)</li>
                        <li className="text-white p-2">Tyres dressed.</li>
                      </div>
                    </div>
                </Typography>
            </CardContent>
          </Card>
    </div>
  );
}

export default Interior;
