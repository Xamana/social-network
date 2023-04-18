import React from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'

let mapStateToProps = (state) => ({
      isAuth: state.auth.isAuth,
})

export let AuthRedirect = (Compotent) => {


      let RedirectComponent = (props) => {

            if (!props.isAuth) return <Navigate to={"/login"}/>

            return <Compotent {...props} />
      }

      let ConnectWithAuthRedirectComponent = connect(mapStateToProps, null)(RedirectComponent);

      return ConnectWithAuthRedirectComponent;
}

