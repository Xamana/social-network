import React from 'react';

class ProfileStatus extends React.Component {
      

      state = {
            editMode: false,
            status: this.props.status,
      }
      enabledEditMode = () => {
            this.setState({ 
                  editMode: true,
            });
      }

      disableEditMode = () => {
            this.setState({
                  editMode: false,
            });
            this.props.updateStatus(this.state.status)
      }

      onChangeStatus = (e) => {
            this.setState({
                  status: e.target.value,
            })
      }

      componentDidUpdate(prevProps, prevState) {
            if (prevProps.status !== this.props.status) {
                  this.setState({status: this.props.status})
            }
        }

      render() {
            return (
                  <div>
                        {
                              !this.state.editMode && 
                              <div className="">
                                    <span onDoubleClick={this.enabledEditMode}>{this.state.status}</span>
                              </div>
                        }
                        {
                              this.state.editMode && 
                              <div className="">
                                    <input className="" onBlur={this.disableEditMode} value={this.state.status} autoFocus={true} onChange={(e)=> this.onChangeStatus(e)}></input>
                              </div>
                        }
                        
                       
                  </div>
            );
      };
      
}

export default ProfileStatus;
