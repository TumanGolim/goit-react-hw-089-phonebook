"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[997],{997:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var o=s(420),a=s(184);const n=e=>{let{todo:t,deleteTodo:s,updateTodo:o}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("li",{children:[t.title," ",t.description]}),(0,a.jsx)("button",{onClick:()=>s(t.id),children:"Delete"})]})},l=e=>{let{todo:t,deleteTodo:s,updateTodo:o}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e=>(0,a.jsx)(n,{todo:e,deleteTodo:s,updateTodo:o},e.id)))})};var d=s(123),i=s(791);class r extends i.Component{constructor(){super(...arguments),this.state={title:"",description:""},this.handleChange=e=>{let{target:{value:t,name:s}}=e;this.setState({[s]:t})},this.handleSubmit=e=>{e.preventDefault(),this.props.createTodo(this.state),this.setState({title:"",description:""})}}render(){return(0,a.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Name"}),(0,a.jsx)("input",{name:"title",type:"text",className:"form-control",id:"exampleInputEmail1",value:this.state.title,onChange:this.handleChange})]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Number"}),(0,a.jsx)("input",{name:"description",type:"text",className:"form-control",id:"exampleInputPassword1",value:this.state.description,onChange:this.handleChange})]}),(0,a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Contact"})]})}}const h=r,c=()=>{const{todo:e}=(0,o.v9)((e=>e.todo)),t=(0,o.I0)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{createTodo:e=>{t((0,d.hx)(e))}}),e&&(0,a.jsx)(l,{todo:e,deleteTodo:e=>{t((0,d.e6)(e))},updateTodo:e=>{t((0,d.Kh)(e))}})]})}}}]);
//# sourceMappingURL=997.4c626819.chunk.js.map