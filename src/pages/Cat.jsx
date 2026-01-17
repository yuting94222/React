import React, { useState } from 'react';
import myImgc1 from '../assets/c1.jpg';
import catImg from '../assets/catImg.jpg';

function Cat() {
    const [uglyimg, setUglyImg] = useState(false);


    return (
        <div className="page">
            <h2>兩隻賤貓</h2>
            <p style={{ textAlign: 'center', margin: '20px 0' }}>
                <button onClick={() => setUglyImg(!uglyimg)}>
                    {uglyimg ? '額外加碼醜臉貓' : '額外加碼醜臉貓'}
                </button>
            </p>
            <img src={myImgc1} style={{ width: '90%', borderRadius: '15px' }} alt="main-cat" />
            <br />

            {uglyimg && (

                <div className="overlay animate-slide-up" onClick={() => setUglyImg(false)}>
                    <div className="catimg">
                        <img
                            src={catImg}
                            alt="ugly-cat"
                            style={{ maxWidth: '80vw', maxHeight: '70vh', borderRadius: '20px' }}
                            onClick={(e) => e.stopPropagation()}
                        /><br />
                        <p style={{ color: 'white', textAlign: 'center' }}>點擊旁邊關閉</p>
                    </div>
                </div>
            )}


        </div>
    );
}

export default Cat;