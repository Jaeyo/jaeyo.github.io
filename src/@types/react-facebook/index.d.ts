
declare module "react-facebook" {
  import React, { Component } from "react"

  interface FacebookProviderProps {
    appId: string
    domain?: string
    version?: string
    cookie?: boolean
    status?: boolean
    xfbml?: boolean
    language?: string
    frictionlessRequests?: boolean
    children?: any
    wait?: boolean
    debug?: boolean
  }

  export class FacebookProvider extends Component<FacebookProviderProps> {}

  interface CommentsProps {
    href: string
  }

  export class Comments extends Component<CommentsProps> {}
}
