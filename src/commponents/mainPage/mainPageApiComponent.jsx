import React from "react";
import Preloader from './../common/Preloader';
import axios from 'axios';
import Pagination from '../pagination/Pagination';
import MainPage from './MainPage';





class MainPageApiComponent extends React.Component {



    componentDidMount() {
        if (this.props.jobs.length === 0) {
            this.props.toggleIsFetching(true);
            axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setJobs(response.data);
            });
        }
    }

    render() {
        const lastPostIndex = this.props.currentPage * this.props.postPerPage;
        const firstPostIndex = lastPostIndex - this.props.postPerPage;
        const currentPost = this.props.jobs.slice(firstPostIndex, lastPostIndex);


        return (
            <>
                {this.props.isFetching ? <Preloader/>  : null}
                <MainPage currentPost={currentPost} jobs={this.props.jobs}
                    firstPostIndex={firstPostIndex} />

                <Pagination totalPost={this.props.jobs.length}
                    postPerPage={this.props.postPerPage}
                    setPage={this.props.setPage}
                    currentPage={this.props.currentPage}
                    firstPostIndex={firstPostIndex}
                    lastPostIndex={lastPostIndex}

                />
            </>)
    }
}

export default MainPageApiComponent;