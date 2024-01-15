import { useNavigate } from "react-router-dom";

const Product = (props) => {
    const navigate = useNavigate();
    return (
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="card pt-1" style={{ width: 'calc(100% - 50px)', height: '480px', margin: 'auto' }}  data-aos="fade-up">
          <img src={props.image} className="card-img-top" alt={props.title} style={{ height: '200px' }} />
          <div className="card-body" >
            <h5 className="card-title" style={{ height: '60px', fontSize: '15px', marginBottom: '20px', overflow: 'auto', textOverflow: 'ellipsis' }}>
              {props.title}
            </h5>
            <p className="card-text" style={{ fontSize: '13px', height: '120px', marginBottom: '10px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {props.description}.
            </p>
            <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary" style={{ height: '40px', fontSize: '14px', borderRadius: '10%' }} onClick={() => {
                navigate(`/product/${props.id}`)
            }}>
              Details
            </button>
            {props.price}$
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;
  