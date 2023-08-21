import React from 'react'
import "../Stores/Stores.scss"
const Stores = () => {
    const mapStyle = {
        height: '400px',
        width: '100%',
        border: '1px solid #ccc', // Example border styling
        borderRadius: '8px', // Example border radius
    };
    const position = [51.505, -0.09]
    return (
        <div className='stores'>
            <h1>Our Stores</h1>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131009.3962549139!2d-73.96745208067632!3d40.73793035438709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1692327184857!5m2!1sen!2sin" width="600" height="450" style={{ border: "0;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37507.3265217405!2d-0.079573076614948!3d51.50217760101362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603438b65db49%3A0x9e78421a085a6f2d!2sTower%20Bridge!5e0!3m2!1sen!2sin!4v1692327405431!5m2!1sen!2sin" width="600" height="450" style={{ border: "0;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.86344946752!2d103.84182389206437!3d1.3364836679333194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1712265591b3%3A0x536dceae38efe7ed!2sThe%20Woodleigh%20Mall!5e0!3m2!1sen!2sin!4v1692327906589!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441025305!2d2.2919063761632845!3d48.85837360070802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1692327993154!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    )
}

export default Stores