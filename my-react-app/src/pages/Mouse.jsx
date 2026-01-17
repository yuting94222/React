import React, { useState } from 'react';
import myImgM1 from '../assets/M1.jpg';
import myImgM2 from '../assets/M2.jpg';

function Mouse() {
    const [showModal, setShowModal] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [showSecret, setShowSecret] = useState(false);

    return (
        <div className="page">
            <h2>兩隻笨鼠</h2>

            <div className='mouseimg'>
                <img src={myImgM1} style={{ width: '60%' }} className='m-photo' />
                <br />
                <img src={myImgM2} style={{ width: '60%' }} className='m-photo' />
            </div>
            <div style={{ textAlign: 'center'}}>
                <div className="buttons">
                    <button
                        onClick={() => {
                            setLikes(isLiked);
                            setIsLiked(!isLiked);
                        }}
                        style={{ backgroundColor: isLiked ? '#fba2c3' : '#ff4d8d' }}>
                        {isLiked ? '🤍 不喜歡' : '❤️ 喜歡！'}
                    </button>
                </div>
                <div className="btn-container" style={{ textAlign: 'center', margin: '20px 0' }}>
                    <button onClick={() => setShowModal(true)}>嘿</button>
                </div>
            </div>
            {showModal && (
                <div style={{ textAlign: 'center', margin: '50px 0' }} className="overlay" onClick={() => setShowModal(false)}>
                    <div className="modal animate-pop-up" onClick={(e) => e.stopPropagation()}>
                        <h3 style={{ color: '#ff7ca3' }}>嗨！</h3>
                        <p>對 就這樣 就是一個小視窗
                            <br />我不知道要放啥了 照片好麻煩
                            <br />但我覺得我的按鈕很可愛</p>
                        <button onClick={() => setShowModal(false)}>關閉</button>
                    </div>
                </div>
            )}
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => setShowSecret(!showSecret)}>
                    {showSecret ? '笨鼠悄悄話' : '笨鼠悄悄話'}
                </button>

                <div className={`secret-content ${showSecret ? 'show' : ''}`}>
                    <p>其實天竺鼠是會吃屎ㄉ</p>
                </div>
            </div>
        </div>
    );
}

export default Mouse;