import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';
import '../../assets/css/style.css';
import Footer from '../Footer';
import './Dashboard.css';
import notes from '../../assets/images/notes.png';
import weight from '../../assets/images/weight.png';
import memory from '../../assets/images/memory.png';
import Cards from '../Cards';
import Header from '../Header';

const Dashboard = (props) => {
    return(
        <div className='main-body'>
            <div className='app-body'>
                <Header />
                <div className='box-main mt-5'>
                    <Cards header="Memories" text="Save and share daily memories" color="#f97c4f" img={memory} link="/memories" />
                    <Cards header="Notes" text="Keep daily notes" color="#5979c3" img={notes} link="/notes"  />
                    <Cards header="Weight Tracker" text="Track your weight daily" color="#18606c" img={weight} link="/" />
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = state => {
    return { user: state.user };
}

export default connect(mapStateToProps, { getUser })(Dashboard);