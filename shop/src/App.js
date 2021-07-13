import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">      
    <main className="app-main">
      <div className="wrapper">
        <div className="page mo_width">
          <div className="page-inner">
            <div className="container">
            <header className="page-title-bar text-center">
                <p className="h4">이달의 추천 임대인</p>
                <p>공생이 추천하는 착한 임대인</p>
            </header>
              <div className="page-section row">
                <div className="section-block col-6">
                    <iframe width="100%" height="120" src="https://www.youtube.com/embed/NcT3Bvf6Ouc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="section-block col-6">
                  <iframe width="100%" height="120" src="https://www.youtube.com/embed/NcT3Bvf6Ouc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className="page-section">
              <ul className="main_btn_box">
                <a href="#"><li><button className="main_btn">공생임대인</button></li></a>
                <a href="#"><li><button className="main_btn">공생임대인</button></li></a>
                <a href="#"><li><button className="main_btn">공생임대인</button></li></a>
                <a href="#"><li><button className="main_btn">공생임대인</button></li></a>
              </ul>
            </div>
            <div className="page-section">
              <ul className="main_btn_box">
                <a><li><button className="btn-blue btn-round">공생 매칭 의뢰하기</button></li></a>
                <a><li><button className="btn-skyblue btn-round">중개사 검색하기</button></li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="foot-nav">
      <nav className="foot-nav-box row">
        <a href="#" className="foot-nav-tab">
          <div className="foot-nav-item foot-nav-img1"></div>
          <span className="foot-nav-text" >홈</span>
        </a>
        <a href="#" className="foot-nav-tab">
          <div className="foot-nav-item foot-nav-img2"></div>
          <span className="foot-nav-text" >관심정보</span>
        </a>
        <a href="#" className="foot-nav-tab">
          <div className="foot-nav-item foot-nav-img3"></div>
          <span className="foot-nav-text" >채팅</span>
        </a>
        <a href="#" className="foot-nav-tab">
          <div className="foot-nav-item foot-nav-img4"></div>
          <span className="foot-nav-text" >마이페이지</span>
        </a>
      </nav>
    </footer>
    </div>
  );
}

export default App;
