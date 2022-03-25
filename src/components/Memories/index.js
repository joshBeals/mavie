import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
import Footer from '../Footer';
import Header from '../Header';
import { fetchMemories } from '../../actions';
import Empty from '../Empty';
import Spinner from '../Spinner/Spinner';
import MemoryItem from './MemoryItem';

const Memories = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        let token = window.localStorage.getItem('mavie_token');
        if(!token || token == null){
            window.localStorage.removeItem('mavie_token');
            navigate('/login');
        }else{
            props.fetchMemories(token);
        }
    }, []);

    const renderNotes = Object.values(props.memories.data).map(memory => {
        return(
            <MemoryItem key={memory._id} memory={memory} />
        );
    });

    if(props.memories.isLoading){
        return(
            <div className='main-body'>
                <div className='app-body'>
                    <Header />
                    <Spinner />
                    <div className='footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div className='main-body'>
            <div className='app-body'>
                <Header />
                <Link to='/memories/new'>
                    <div style={{width: '100%', padding: '0px 20px'}}>
                        <button className='long-btn'>Add New Memory</button>
                    </div>
                </Link>
                <div className='notes-main'>
                    {Object.keys(props.memories.data).length === 0 ? <Empty /> : renderNotes}
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { memories: state.memories };
}

export default connect(mapStateToProps, { fetchMemories })(Memories);