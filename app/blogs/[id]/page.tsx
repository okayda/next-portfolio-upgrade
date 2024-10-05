import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const MyCodeBlock = dynamic(() => import("@/components/MyCodeBlock"), {
  ssr: false,
});

export default function page() {
  return (
    <section className="my-36">
      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="datePublished" content="2024-10-05" />
        <div itemProp="articleBody" className="mx-auto max-w-[800px]">
          <h2
            itemProp="headline"
            className="mb-20 text-3xl font-semibold text-gray-100 md:text-4xl"
          >
            Async/Await Concept
          </h2>

          <h3 className="mb-4 mt-10 text-2xl font-semibold text-gray-200">
            Introduction
          </h3>

          <p className="mb-10 text-gray-300">
            If you are new to JavaScript, you might have heard terms like{" "}
            <strong>callbacks</strong>, <strong>promises</strong>, &{" "}
            <strong>async/await</strong>. These concepts are fundamental to
            JavaScript, especially when dealing with tasks like fetching data
            from an API or performing some mutation.
          </p>

          <p className="mb-10 text-gray-300">
            In web development, working with asynchronous operations is
            inevitable. Whether you are fetching data from an API or querying a
            database, handling these asynchronous tasks efficiently is
            essential. In the past, JavaScript developers had to rely on{" "}
            <strong>callbacks</strong>, leading to the infamous{" "}
            <strong>callback hell</strong>. Later <strong>promises</strong>{" "}
            arrived as a solution, but chaining them could still lead to
            unwieldy code. Thankfully <strong>async/await</strong> has emerged
            as a powerful and intuitive way, making code readable & efficient.
          </p>

          <p className="mb-10 text-gray-300">
            In this blog post, we will explore & focus on how async/await works
            but first, we need to understand the different types of asynchronous
            code.
          </p>

          <h3 className="mb-4 mt-10 text-2xl font-semibold text-gray-200">
            Different types of asynchronous code
          </h3>

          <h4 className="mb-2 mt-8 text-xl font-semibold text-gray-200">
            Callbacks
          </h4>

          <p className="mb-3 text-gray-300">
            Callbacks were the original way to handle asynchronous operations in
            JavaScript. A callback is a function passed as an argument to
            another function, to be called back at a later time.
          </p>

          <MyCodeBlock
            codeSyntax={`function fetchData(callback)  {
    setTimeout(() =>  {
      const data = "Sample Data";
      callback(data);
    }, 1000);
}

fetchData((data) =>  {
    console.log("Data received:", data);
});`}
          />

          <p className="mb-3 mt-3 text-gray-300">
            While callbacks work, they can lead to{" "}
            <strong>callback hell</strong> when dealing with multiple
            asynchronous operations, making code hard to read & maintain.
          </p>

          <MyCodeBlock
            codeSyntax={`// Callback hell 
fetchData((data) =>  {
   console.log("Data received:", data);
   processData(data, (processedData) =>  {
     console.log("Data processed:", processedData);
     validateData(processedData, (isValid, validData) =>  {
       if (isValid)  {
         saveData(validData, () =>  {
           console.log("All operations completed.");
         });
       }  else  {
         console.error("Data validation failed.");
       }
     });
   });
});`}
          />

          <h4 className="mb-2 mt-8 text-xl font-semibold text-gray-200">
            Promises
          </h4>

          <p className="mb-3 text-gray-300">
            Promises were introduced to address the issues with callbacks. A
            promise represents a value that may be available now, in the future
            or never.
          </p>

          <MyCodeBlock
            codeSyntax={`function fetchData()  {
    return new Promise((resolve, reject) =>  {
       setTimeout(() =>  {
         const data = "Sample Data";
         resolve(data);
       }, 1000);
    });
}

fetchData()
  .then((data) =>  {
      console.log("Data received:", data);
  })
  .catch((error) =>  {
      console.error("Error:", error);
  });`}
          />

          <p className="mb-3 mt-3 text-gray-300">
            Promises improve readability but can still become complex with
            multiple chained operations.
          </p>

          <MyCodeBlock
            codeSyntax={`// Multiple chained operations
fetchData()
  .then((data) => {
    console.log("Data received:", data);
    return processData(data);
  })
  .then((processedData) => {
    console.log("Data processed:", processedData);
    return saveData(processedData);
  })
  .then((confirmation) => {
    console.log(confirmation);
  })
  .catch((error) => {
    console.error("Error:", error);
  });`}
          />

          <h4 className="mb-2 mt-8 text-xl font-semibold text-gray-200">
            Async/Await
          </h4>

          <p className="mb-3 text-gray-300">
            Async/await is a syntactic sugar built on top of promises. It allows
            you to write asynchronous code that looks synchronous, making it
            easier to read & write.
          </p>

          <MyCodeBlock
            codeSyntax={`async function getData()  {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  console.log(data);
}`}
          />

          <p className="mb-10 mt-3 text-gray-300">
            This async/await version looks more linear & easier to follow,
            especially as the complexity of the asynchronous operations grows.
          </p>

          <h4 className="mb-2 mt-8 text-2xl font-semibold text-gray-200">
            So which one should you use?
          </h4>

          <p className="mb-10 text-gray-300">
            For modern JavaScript development, <strong>async/await</strong> is
            generally the preferred method for handling asynchronous code. It
            combines the advantages of promises with a syntax that is easier to
            read & write. By making asynchronous code look synchronous, it
            simplifies the flow and reduces the cognitive load when reading and
            maintaining code.
          </p>

          <h4 className="mb-2 mt-8 text-2xl font-semibold text-gray-200">
            Recommendation?
          </h4>

          <p className="mb-10 text-gray-300">
            By choosing the right tool for the job and understanding the
            strengths and weaknesses of each approach, you can write efficient,
            readable, & maintainable code.
          </p>

          <p className="mb-10 text-gray-300">
            <strong>Use async/await</strong> for most of your asynchronous code
            to write clean & maintainable code. This does not mean you should
            not use callbacks & promises anymore.
          </p>

          <p className="mb-10 text-gray-300">
            <strong>Understanding callbacks & promises</strong> is very crucial,
            especially if you want to maintain or work with certain libraries
            and codebases that rely on them. In some cases, especially when
            working with older APIs or codebases, callbacks & promises might
            still be used. Knowing how to work with them ensures compatibility
            and the ability to refactor or integrate legacy code.
          </p>

          <h3 className="mb-2 mt-10 text-2xl font-semibold text-gray-200">
            How async/await works?
          </h3>

          <p className="mb-3 text-gray-300">
            When you declare a function with the <code>async</code> keyword, it
            automatically returns a Promise. Inside this function, you can use
            the <code>await</code> keyword, which pauses the function execution
            until that Promise settles (either fulfilled or rejected).
          </p>

          <MyCodeBlock
            codeSyntax={`async function fetchData()  {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}`}
          />

          <p className="mb-10 mt-3 text-gray-300">
            The code above demonstrates the basic usage of <code>async</code> &{" "}
            <code>await</code>, but its considered <strong>bad practice</strong>{" "}
            because it lacks proper error handling. When fetching data from an
            API, error handling is very crucial due to the unpredictable nature
            of network requests. Servers can be unstable, APIs might be down or
            responses might not be in the expected format. Without error
            handling, your application can encounter runtime errors that are
            hard to debug.
          </p>

          <h4 className="mb-2 mt-8 text-xl font-semibold text-gray-200">
            How can we write better async code?
          </h4>

          <p className="mb-3 text-gray-300">
            To make async code better, we should handle potential errors using{" "}
            <strong>try...catch</strong> blocks. This way, we can catch
            exceptions thrown during the asynchronous operations and handle them
            properly.
          </p>

          <MyCodeBlock
            codeSyntax={`async function fetchData()  {
  try  {
     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
     if (!response.ok)  {
       // The server responded with a status outside the 200-299 range
       throw new Error(\`HTTP error! Status: \${response.status}\`);
     }
     const data = await response.json();
     return data;
  }  catch (error)  {
     // Handle errors that occurred during fetch or response processing
     console.error('Error fetching data:', error);
     // You can rethrow the error or return a default value
     throw error;
   }
}`}
          />

          <h4 className="mb-4 mt-6 text-xl font-semibold text-gray-200">
            Why is error handling important?
          </h4>

          <ul className="mb-10 list-disc pl-5 text-gray-300">
            <li className="mb-2">
              <strong>Unstable APIs/Servers:</strong> External APIs & servers
              can be unreliable. Network issues, server downtime, or incorrect
              endpoints can cause requests to fail.
            </li>
            <li className="mb-2">
              <strong>Runtime Errors:</strong> Without proper error handling,
              your application might crash or behave unexpectedly when an error
              occur.
            </li>
            <li className="mb-2">
              <strong>Debugging:</strong> Runtime errors without clear handling
              make debugging difficult. For beginners and junior developers,
              understanding where and why the code failed becomes a significant
              challenge.
            </li>
            <li className="mb-2">
              <strong>Security Risks:</strong> Unhandled errors can expose
              sensitive information or make your application vulnerable to
              security risks.
            </li>
          </ul>

          <h3 className="mb-4 mt-16 text-2xl font-semibold text-gray-200">
            Deep dive into some concepts with async/await
          </h3>

          <h4 className="mb-2 mt-8 text-xl font-semibold text-gray-200">
            How does event loop work with asynchronous code?
          </h4>

          <p className="mb-10 text-gray-300">
            Understanding how asynchronous code interacts with the event loop is
            crucial, as it helps you troubleshoot errors related to asynchronous
            operations. I will not dive deeply into this topic since event loop
            is a broad topic, but here is a simple overview of how asynchronous
            execution works.
          </p>

          <p className="mb-1 text-gray-300">
            <strong>Initiating Asynchronous Operations</strong>
          </p>

          <p className="mb-10 text-gray-300">
            When you write asynchronous code using{" "}
            <strong>async/await, promises or callbacks</strong> you are
            instructing JavaScript to handle certain operations without blocking
            the main execution thread. Basically these operations execute in the
            background.
          </p>

          <p className="mb-1 text-gray-300">
            <strong>Role of Event Loop</strong>
          </p>

          <p className="mb-3 text-gray-300">
            Event loop manages asynchronous tasks by coordinating between the{" "}
            <strong>call stack</strong> (where your code runs) and the{" "}
            <strong>Queue</strong> (where callbacks, promises, & async/await
            tasks wait to be executed).
          </p>

          <Image
            src="/gif/eventLoop.gif"
            width={100}
            height={100}
            className="size-full rounded-md"
            alt="GIF"
          />
          <span className="mt-1 block text-xs font-semibold text-gray-300">
            GIF created by{" "}
            <Link
              target="_blank"
              href="https://velog.io/@gtfo/posts"
              className="border-b-2 border-b-sky-500 pb-0.5 text-sky-500"
            >
              Sung Jun Eun
            </Link>
          </span>

          <p className="my-6 text-gray-300">
            If you are curious to dive deeper into the event loop, I highly
            encourage you to check out{" "}
            <Link
              target="_blank"
              href="https://www.youtube.com/@theavocoder"
              className="border-b-2 border-b-sky-500 pb-0.5 font-semibold text-sky-500"
            >
              Lydia Hallie
            </Link>{" "}
            videos.
          </p>

          <div className="mb-6 text-gray-300">
            <span className="mb-4 block">
              <strong>JavaScript Visualized - Promise Execution</strong>
            </span>

            <iframe
              width="500"
              height="210"
              src="https://www.youtube.com/embed/Xs1EMmBLpn4?si=3Wl_vOd6XESVbW09"
              className="mx-auto mb-8 size-full h-[210px] rounded-md border border-[#B49BFF]/30 xs:h-[280px] md:h-[400px]"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <span className="mb-4 block">
              <strong>JavaScript Visualized - Event Loop</strong>
            </span>

            <iframe
              width="500"
              height="210"
              src="https://www.youtube.com/embed/eiC58R16hb8?si=UD4FpOmM2kmHe_Bm"
              className="mx-auto size-full h-[210px] rounded-md border border-[#B49BFF]/30 xs:h-[280px] md:h-[400px]"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <h4 className="mb-2 mt-10 text-2xl font-semibold text-gray-200">
            Performance considerations
          </h4>

          <p className="mb-10 text-gray-300">
            While async/await simplifies code, its important to be mindful of
            performance.
          </p>

          <p className="mb-1 text-gray-300">
            <strong>Sequential Execution (Not Recommended)</strong>
          </p>

          <p className="mb-10 text-gray-300">
            Consider a scenario where you need to fetch data from multiple URLs.
            A common mistake is to use <code>await</code> inside a loop, which
            causes each asynchronous operation to wait for the previous one to
            complete before starting the next. This results in sequential
            execution, which can be inefficient when the async operations are
            independent of each other.
          </p>

          <p className="mb-3 text-gray-300">
            <strong>Inefficient code</strong>
          </p>

          <MyCodeBlock
            codeSyntax={`async function fetchAll(urls)  {
   for (const url of urls)  {
     const response = await fetch(url);
     const data = await response.json();
     console.log(data);
   }
}`}
          />

          <p className="mb-10 mt-3 text-gray-300">
            In the code above, each <code>fetch</code> request waits for the
            previous one to finish. If you have five URLs, the total time will
            be roughly the sum of the time taken by each request.
          </p>

          <p className="mb-1 text-gray-300">
            <strong>Parallel Execution (Recommended)</strong>
          </p>

          <p className="mb-10 text-gray-300">
            To execute multiple asynchronous operations in parallel, you can
            initiate all the promises first and then wait for all of them to
            resolve using <strong>Promise.all</strong>. This approach allows the
            operations to run concurrently, significantly improving performance.
          </p>

          <p className="mb-3 text-gray-300">
            <strong>Efficient code</strong>
          </p>

          <MyCodeBlock
            codeSyntax={`async function fetchAll(urls)  {
  try  {
     const fetchPromises = urls.map(async (url) => {
       const response = await fetch(url);
       return response.json();
     });
     const results = await Promise.all(fetchPromises);
     results.forEach((data) => console.log(data));
  }  catch (error)  {
     console.error('Error fetching data:', error);
   }
}`}
          />

          <p className="mb-1 mt-8 text-gray-300">
            <strong>Why does this Matter?</strong>
          </p>

          <p className="mb-10 text-gray-300">
            Running asynchronous operations in parallel can drastically reduce
            the total execution time. Instead of waiting for each operation to
            complete before starting the next one, you leverage the non-blocking
            nature of JavaScript to handle tasks concurrently.
          </p>

          <h2 className="mb-2 mt-12 text-2xl font-semibold text-gray-200">
            My thoughts
          </h2>

          <p className="mb-8 text-gray-300">
            Async/await has revolutionized the way we handle asynchronous
            operations in JavaScript. By writing code that is both readable &
            maintainable, we can focus more on solving complex problems rather
            than managing convoluted code structures.
          </p>

          <p className="text-gray-300">
            In my own journey, embracing <strong>async/await</strong> has not
            only improved the quality of my code but also enhanced my
            productivity as a developer. I encourage you to dive deep into
            async/await, experiment with advanced patterns, and see how it can
            transform your approach.
          </p>
        </div>
      </article>
    </section>
  );
}
