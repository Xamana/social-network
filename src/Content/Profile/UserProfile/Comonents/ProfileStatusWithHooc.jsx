import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooc = (props) => {

      let [editMode, setEditMode] = useState(false);
      let [status, setStatus] = useState(props.status);

      let enabledEditMode = () => {
          setEditMode(true)
      }

      let disableEditMode = () => {
          setEditMode(false);
          props.updateStatus(status);
      }

      let onChangeStatus = (e) => {
          setStatus(e.target.value);
      }

      useEffect(() => {
          if ((status !== props.status)){
              setStatus(props.status);
          }
      }, [props.status])

            return (
                  <div>
                        {
                              !editMode && 
                              <div className={""}>
                                    <span onDoubleClick={ enabledEditMode } data-testid={'custom-span'}>{ status }</span>
                              </div>
                        }
                        {
                              editMode && 
                              <div className={""}>
                                    <input data-testid={'custom-input'} className="" onBlur={disableEditMode} value={status} autoFocus={true} onChange={(e)=> onChangeStatus(e)}></input>
                              </div>
                        }
                        
                       
                  </div>
            );
      
}

export default ProfileStatusWithHooc;
