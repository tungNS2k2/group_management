import {Component} from 'react';
import './WithLoading.scss';

const WithLoading = (WrappedComponent) =>{
    class LoadingComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                isLoading: false
            }
        }

        handleShowLoading = (isLoading) =>{
            this.setState({
                isLoading: isLoading 
            })
        }


        render(){
            return(
                <div className="loading-container"> 
                    {this.state.isLoading &&
                        <div className='loading-content'>
                        <div className='loading-main'>
                            <img src='images/loading.gif' />
                            <h4 >
                                loading...
                            </h4>
                        </div>
                    </div>}
                    <WrappedComponent showLoading={this.handleShowLoading}/>
                </div>
            )
        }
        

    }
    return LoadingComponent;
}
export default WithLoading;