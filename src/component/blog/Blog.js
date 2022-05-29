import React from 'react';
import './Blog.css';
const Blog = () => {
	return (
		<div>
			<div className='myBlog'>
				<div className='blogPart'>
					<p className=''>
						<div className='QA'>
							<p className='text-3xl m-6'>question and answer :</p>
							<h2 className='text-2xl'>1. How to improve performance of react application ?</h2>
							<p>To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
						</div>
						<div className='QA'>
							<br></br>
							<h2 className='text-2xl'>2. How does prototypical inheritance work?</h2>
							<p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
							<br></br>
							<h2 className='text-2xl'>3. what is a unit test. why should write unit test ?</h2>
							<p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.</p>
							<p>Unit testing allows the programmer to refactor code or upgrade system libraries at a later date, and make sure the module still works correctly (e.g., in regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified.</p>
							<br></br>
							<h2 className='text-2xl'>4. what are the different ways to manage a state in a react application ?</h2>
							<p>The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:</p>

							<h4>1. Hooks</h4>
							<h4>2. React Context API</h4>
							<h4>3. Redux</h4>
							<h4>4. Apollo Link State</h4>
							<br></br>
							<h2 className='text-2xl'>5. why do not set state directly in react ?</h2>
							<p>One should never the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.:</p>
						</div>
						<br></br>
						<br></br>
						<br></br>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
