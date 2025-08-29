import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const WebServicesExplanation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
          <h1 className="text-4xl font-extrabold mb-2 select-none">🌐 Understanding Web Services</h1>
          <p className="text-lg opacity-90 select-none">A Comprehensive Guide to Modern Service Architecture</p>
      

        <section className="p-6 space-y-8 text-gray-800 dark:text-gray-200">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-l-8 border-indigo-500 p-6 my-8 rounded-r-xl shadow-md relative">
            <span className="absolute -top-4 -left-4 bg-indigo-500 rounded-full w-10 h-10 flex items-center justify-center text-white text-2xl font-bold">💡</span>
            <strong className="text-lg text-indigo-700">What are Web Services?</strong><br />
            Web Services are standardized methods of communication between different software applications over a network. They enable applications written in different programming languages, running on different platforms, to communicate with each other using common protocols and data formats.
            <br /><br />
            <strong>Think of it as:</strong> A universal translator that allows different software systems to talk to each other, regardless of their underlying technology.
          </div>

          <section className="bg-orange-50 border-2 border-orange-400 p-6 rounded-xl my-8">
            <h3 className="text-2xl font-bold mb-4 text-orange-700">🌟 Real-World Examples</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <strong className="text-lg text-gray-900">🏦 Online Banking</strong><br />
                Mobile apps use web services to securely fetch your account info from the bank.
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <strong className="text-lg text-gray-900">🛒 E-commerce</strong><br />
                Payment gateway web services process your online transactions securely.
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <strong className="text-lg text-gray-900">📱 Social Media</strong><br />
                Posting a photo from your device to Instagram uses web services for data transfer.
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <strong className="text-lg text-gray-900">🗺️ Maps & Navigation</strong><br />
                Ride-sharing apps use Google Maps web services for routes and ETA calculations.
              </div>
            </div>
          </section>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-indigo-500 pb-2">Step 1️⃣: Web Service Architecture Overview</h2>
          <div className="bg-blue-50 p-6 rounded-xl my-8 text-center shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">🏗️ Core Components</h3>
            <div className="flex flex-col md:flex-row justify-around items-center flex-wrap gap-8 my-8">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg min-w-[180px] transition-transform hover:translate-y-[-8px]">
                <span className="block text-4xl mb-4">📱</span>
                <div className="text-xl font-bold mb-2">Service Consumer</div>
                <div className="text-sm opacity-90">Applications that request services</div>
              </div>
              <span className="text-4xl text-indigo-500 md:rotate-0 rotate-90">→</span>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg min-w-[180px] transition-transform hover:translate-y-[-8px]">
                <span className="block text-4xl mb-4">📋</span>
                <div className="text-xl font-bold mb-2">Service Registry</div>
                <div className="text-sm opacity-90">Directory of available services (optional)</div>
              </div>
              <span className="text-4xl text-indigo-500 md:rotate-0 rotate-90">→</span>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 rounded-xl shadow-lg min-w-[180px] transition-transform hover:translate-y-[-8px]">
                <span className="block text-4xl mb-4">🖥️</span>
                <div className="text-xl font-bold mb-2">Service Provider</div>
                <div className="text-sm opacity-90">Systems offering web services</div>
              </div>
            </div>
            <div className="mt-8">
              <strong className="text-lg text-gray-900">Communication Flow:</strong>
              <ol className="text-left max-w-xl mx-auto mt-4 list-decimal list-inside space-y-2">
                <li><strong>Discovery:</strong> Consumer finds services in the registry (optional)</li>
                <li><strong>Binding:</strong> Consumer connects to provider</li>
                <li><strong>Invocation:</strong> Consumer requests an operation/data</li>
                <li><strong>Response:</strong> Provider sends the requested data</li>
              </ol>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-indigo-500 pb-2">Step 2️⃣: Web Service Architecture Layers</h2>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 transition-all hover:border-indigo-500 hover:translate-x-2">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg float-left mr-4 mb-4">1</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">🚛 Transport Layer - The Highway System</h3>
              <p className="mb-4"><strong>Purpose:</strong> Defines how data travels between systems over the network.</p>

              <div className="my-4">
                <strong className="text-lg text-gray-900">Common Transport Protocols:</strong>
                <ul className="ml-8 mt-2 list-disc list-inside space-y-1">
                  <li><strong>HTTP/HTTPS:</strong> Most common, used by REST APIs and modern web services</li>
                  <li><strong>SMTP:</strong> Email-based services, often for document exchange</li>
                  <li><strong>FTP/SFTP:</strong> File transfer services, bulk data operations</li>
                  <li><strong>TCP/UDP:</strong> Low-level protocols for high-performance applications</li>
                  <li><strong>WebSockets:</strong> Real-time bidirectional communication</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded-lg my-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                <strong className="text-lg text-yellow-800">Example:</strong> When you use a weather app, it sends an HTTP request like:<br />
                <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto mt-2"><code>GET https://api.weather.com/v1/current?location=London</code></pre>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 transition-all hover:border-indigo-500 hover:translate-x-2">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg float-left mr-4 mb-4">2</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">📦 Messaging Layer - The Package Format</h3>
              <p className="mb-4"><strong>Purpose:</strong> Defines the structure and format of data being exchanged.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                  <span className="block text-4xl mb-4">🏷️</span>
                  <div className="text-xl font-bold mb-2 text-gray-900">XML Format</div>
                  <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto relative" data-lang="XML">
                    <span className="absolute top-0 right-0 bg-indigo-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">XML</span>
                    <code>{`<?xml version="1.0" encoding="UTF-8"?>
<weather>
  <city>London</city>
  <temperature unit="celsius">22</temperature>
  <condition>Sunny</condition>
  <humidity>65%</humidity>
</weather>`}</code>
                  </pre>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                  <span className="block text-4xl mb-4">📋</span>
                  <div className="text-xl font-bold mb-2 text-gray-900">JSON Format</div>
                  <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto relative" data-lang="JSON">
                    <span className="absolute top-0 right-0 bg-indigo-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">JSON</span>
                    <code>{`{
  "city": "London",
  "temperature": {
    "value": 22,
    "unit": "celsius"
  },
  "condition": "Sunny",
  "humidity": "65%"
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="my-4">
                <strong className="text-lg text-gray-900">Format Comparison:</strong>
                <ul className="ml-8 mt-2 list-disc list-inside space-y-1">
                  <li><strong>JSON:</strong> Lightweight, human-readable, widely supported</li>
                  <li><strong>XML:</strong> Structured, supports schemas, better for complex data</li>
                  <li><strong>Protocol Buffers:</strong> Binary format, very efficient</li>
                  <li><strong>MessagePack:</strong> Compact binary serialization</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 transition-all hover:border-indigo-500 hover:translate-x-2">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg float-left mr-4 mb-4">3</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">📖 Service Description Layer - The Manual</h3>
              <p className="mb-4"><strong>Purpose:</strong> Provides documentation and specifications for how to use the service.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
                  <h4 className="text-xl font-bold mb-2 text-red-700">SOAP Services - WSDL</h4>
                  <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto relative" data-lang="WSDL">
                    <span className="absolute top-0 right-0 bg-indigo-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">WSDL</span>
                    <code>{`<definitions name="WeatherService">
  <types>
    <schema>
      <element name="GetWeatherRequest">
        <complexType>
          <sequence>
            <element name="city" type="string"/>
          </sequence>
        </complexType>
      </element>
    </schema>
  </types>
</definitions>`}</code>
                  </pre>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
                  <h4 className="text-xl font-bold mb-2 text-green-700">REST Services - OpenAPI/Swagger</h4>
                  <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto relative" data-lang="YAML">
                    <span className="absolute top-0 right-0 bg-indigo-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">YAML</span>
                    <code>{`openapi: 3.0.0
info:
  title: Weather API
  version: 1.0.0
paths:
  /weather:
    get:
      summary: Get current weather`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 transition-all hover:border-indigo-500 hover:translate-x-2">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg float-left mr-4 mb-4">4</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">🔍 Service Discovery Layer - The Phone Book</h3>
              <p className="mb-4"><strong>Purpose:</strong> Helps applications find and connect to available services.</p>

              <div className="my-4">
                <strong className="text-lg text-gray-900">Discovery Mechanisms:</strong>
                <ul className="ml-8 mt-2 list-disc list-inside space-y-1">
                  <li><strong>UDDI (Legacy):</strong> Universal Description, Discovery, and Integration</li>
                  <li><strong>Service Registries:</strong> Eureka, Consul, Zookeeper</li>
                  <li><strong>API Gateways:</strong> Kong, AWS API Gateway, Azure API Management</li>
                  <li><strong>Service Mesh:</strong> Istio, Linkerd for microservices</li>
                  <li><strong>DNS-based:</strong> Service discovery via DNS records</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-indigo-500 pb-2">Step 3️⃣: Types of Web Services</h2>
          <div className="bg-blue-50 p-6 rounded-xl my-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">📊 Service Type Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
                <h4 className="text-xl font-bold mb-2 text-red-700">SOAP Web Service (Strict XML-based)</h4>
                <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
                  <li><strong>Transport Layer:</strong> HTTP</li>
                  <li><strong>Messaging Layer:</strong> SOAP (XML)</li>
                  <li><strong>Description Layer:</strong> WSDL</li>
                  <li><strong>Discovery Layer:</strong> UDDI</li>
                  <li><strong>Use Case:</strong> Banking, Payment Gateways</li>
                </ul>
                <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto relative" data-lang="XML">
                  <span className="absolute top-0 right-0 bg-indigo-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">XML</span>
                  <code>{`<soap:Envelope>
  <soap:Body>
    <getBalance>
      <accountNumber>12345</accountNumber>
    </getBalance>
  </soap:Body>
</soap:Envelope>`}</code>
                </pre>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
                <h4 className="text-xl font-bold mb-2 text-green-700">RESTful Web Service (Lightweight JSON)</h4>
                <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
                  <li><strong>Transport Layer:</strong> HTTP/HTTPS</li>
                  <li><strong>Messaging Layer:</strong> JSON</li>
                  <li><strong>Description Layer:</strong> OpenAPI/Swagger</li>
                  <li><strong>Discovery Layer:</strong> API Gateway</li>
                  <li><strong>Use Case:</strong> Weather APIs, Social Media, Microservices</li>
                </ul>
                <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto relative" data-lang="JSON">
                  <span className="absolute top-0 right-0 bg-indigo-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">JSON</span>
                  <code>{`GET https://api.weather.com/v1/current?city=Bangalore

{
  "city": "Bangalore",
  "temperature": "28°C"
}`}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <span className="block text-4xl mb-4">🔗</span>
              <div className="text-xl font-bold mb-2 text-gray-900">XML-RPC (Old RPC-style XML)</div>
              <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto relative" data-lang="XML">
                <span className="absolute top-0 right-0 bg-indigo-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">XML</span>
                <code>{`<methodCall>
  <methodName>getWeather</methodName>
  <params>
    <param><value><string>Bangalore</string></value></param>
  </params>
</methodCall>`}</code>
              </pre>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <span className="block text-4xl mb-4">📝</span>
              <div className="text-xl font-bold mb-2 text-gray-900">JSON-RPC (RPC-style JSON)</div>
              <pre className="bg-gray-900 text-white p-3 rounded-md text-sm overflow-x-auto relative" data-lang="JSON">
                <span className="absolute top-0 right-0 bg-indigo-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">JSON</span>
                <code>{`{
  "jsonrpc": "2.0",
  "method": "getWeather",
  "params": ["Bangalore"],
  "id": 1
}`}</code>
              </pre>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-indigo-500 pb-2">Step 4️⃣: Summary Table</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-separate border-spacing-0 rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr>
                  <th className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold uppercase text-sm tracking-wider rounded-tl-xl">Layer</th>
                  <th className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold uppercase text-sm tracking-wider">SOAP Example</th>
                  <th className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold uppercase text-sm tracking-wider rounded-tr-xl">REST Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-200 bg-white">Transport</td>
                  <td className="p-4 border-b border-gray-200 bg-white">HTTP, SMTP</td>
                  <td className="p-4 border-b border-gray-200 bg-white">HTTP/HTTPS</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 bg-white">Messaging</td>
                  <td className="p-4 border-b border-gray-200 bg-white">SOAP (XML)</td>
                  <td className="p-4 border-b border-gray-200 bg-white">JSON</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 bg-white">Description</td>
                  <td className="p-4 border-b border-gray-200 bg-white">WSDL</td>
                  <td className="p-4 border-b border-gray-200 bg-white">OpenAPI (Swagger)</td>
                </tr>
                <tr>
                  <td className="p-4 bg-white rounded-bl-xl">Discovery</td>
                  <td className="p-4 bg-white">UDDI</td>
                  <td className="p-4 bg-white rounded-br-xl">API Gateway, Registry</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-xl my-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🎯 Key Takeaways</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <strong>Web Services</strong> are bridges between apps on the web.
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <strong>Architecture</strong> includes Provider, Requestor, Registry, and four main layers.
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <strong>Types:</strong> SOAP (protocol/XML), REST (resource/JSON), RPC (remote call).
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <strong>Practice:</strong> Use SOAP for tight contracts (banking), REST for simplicity (modern APIs).
              </div>
            </div>
          </div>
          </section>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default WebServicesExplanation;