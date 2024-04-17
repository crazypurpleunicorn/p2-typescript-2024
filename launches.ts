export class spacexLaunch {
  //cuando hago una clase... puedo poner sus atributos vs poner su atributos y rellenarlos en el constructor vs sólo poner el constructor???!!
  //si pongo solo el constructor dice que dicha clase no tiene el atributo x, lo cual es verdad...
  //pero código de Pau sólo tiene un constructor...mmmm pero sin nada en los {}
  success: Boolean;
  flightNumber: number;
  dateUtc: string;
  name:string;
  picture: {
    small: string,
    large:string
  };
  id: string;
  
  constructor(success: Boolean, flightNumber: number, dateUtc: string, name:string, picture: {
                small: string,
                large:string
            }, id:string){
              this.success = success;
              this.flightNumber = flightNumber;
              this.dateUtc = dateUtc;
              this.name = name;
              this.picture = picture;
              this.id = id;
            }
}

//   get fullName(){
//     return `${this.name.first} ${this.name.last}`;
//   }
// }

export const loadLaunches = async () => {
  const response = await fetch(`https://api.spacexdata.com/v5/launches/past`);
  const results: any[] = await response.json();
  //output the model
  const launches: Array<spacexLaunch>= results.map(x => {

    //select the fields you want from your JSON objects
    const success = x.success;
    const flightNumber = x.flight_number;
    const dateUtc = x.date_utc;
    const name = x.name;
    const picture = x.links.patch
    const id = x.id
    
    //create an instance of your dataClass
    let launch = new spacexLaunch(success, flightNumber, dateUtc, name, picture,id)
    return launch;
  })
  
  return launches;
  
  
};


type Picture = {
  small: string;
  large: string;
};

export type spacexLaunchType = {
  success: boolean;
  flightNumber: number;
  dateUtc: string;
  name: string;
  picture: Picture;
  id: string;
};