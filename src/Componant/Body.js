import React from 'react';

function Body() {
  const RestList = [
    {
      id: 1,
      name: "Patil Hotels",
      rating: 4.2,
      time: "35-40 min",
      cusine: "South Indian ,Punjabi,Street Food"
    },
    {
      id: 2,
      name: "Namo Cafe",
      rating: 3.2,
      time: "35-40 min",
      cusine: "South Indian ,Punjabi,Street Food"
    },
    {
        id: 3,
        name: "Punjab Bar",
        rating: 4.2,
        time: "35-40 min",
        cusine: "Punjabi Food,Street Food"   
    }
  ];

  var RestoCard = (props) => {
    const restData = props.restData;
    return (
      <div className="card col-md-3 m-2" style={{ width: '18rem' }}>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pzaowbuaslyzc2pvbcek" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{restData.name}</h5>
          <p className="card-text"><span className='text-center'><i className={`bi bi-star-fill text-${(restData.rating>4 ?'success':'danger')}`}></i> {restData.rating}</span> <span>{restData.time}</span></p>
          <p>{restData.cusine}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    );
  };

  return (
    <div className='container' style={{ marginTop: '100px' }} >
      <div className='row'>
        {RestList.map((element, index) => {
          return <RestoCard key={index} restData={element} />;
        })}
      </div>
    </div>
  );
}

export default Body;
