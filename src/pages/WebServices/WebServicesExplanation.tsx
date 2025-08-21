import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ArrowUp } from 'lucide-react';
import './WebServicesExplanation.css'; 

const WebServicesExplanation = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="container">
          <div className="header">
            <h1>🌐 Understanding Web Services</h1>
            <p className="subtitle">A Comprehensive Guide to Modern Service Architecture</p>
          </div>
          <div className="content">
            <div className="highlight">
              <strong>What are Web Services?</strong><br />
              Web Services are standardized methods of communication between different software applications over a network. They enable applications written in different programming languages, running on different platforms, to communicate with each other using common protocols and data formats.
              <br /><br />
              <strong>Think of it as:</strong> A universal translator that allows different software systems to talk to each other, regardless of their underlying technology.
            </div>
            <section className="real-world-examples">
              <h3>🌟 Real-World Examples</h3>
              <div className="example-grid">
                <div className="example-item">
                  <strong>🏦 Online Banking</strong><br />
                  Mobile apps use web services to securely fetch your account info from the bank.
                </div>
                <div className="example-item">
                  <strong>🛒 E-commerce</strong><br />
                  Payment gateway web services process your online transactions securely.
                </div>
                <div className="example-item">
                  <strong>📱 Social Media</strong><br />
                  Posting a photo from your device to Instagram uses web services for data transfer.
                </div>
                <div className="example-item">
                  <strong>🗺️ Maps &amp; Navigation</strong><br />
                  Ride-sharing apps use Google Maps web services for routes and ETA calculations.
                </div>
              </div>
            </section>
            <h2>Step 1️⃣: Web Service Architecture Overview</h2>
            <div className="architecture-diagram">
              <h3>🏗️ Core Components</h3>
              <div className="diagram-container">
                <div className="diagram-node client">
                  <span className="diagram-icon">📱</span>
                  <div className="diagram-title">Service Consumer</div>
                  <div className="diagram-description">Applications that request services</div>
                </div>
                <span className="arrow">→</span>
                <div className="diagram-node registry">
                  <span className="diagram-icon">📋</span>
                  <div className="diagram-title">Service Registry</div>
                  <div className="diagram-description">Directory of available services (optional)</div>
                </div>
                <span className="arrow">→</span>
                <div className="diagram-node provider">
                  <span className="diagram-icon">🖥️</span>
                  <div className="diagram-title">Service Provider</div>
                  <div className="diagram-description">Systems offering web services</div>
                </div>
              </div>
              <div style={{marginTop: '2rem'}}>
                <strong>Communication Flow:</strong>
                <ol style={{textAlign: 'left', maxWidth: '600px', margin: '1rem auto'}}>
                  <li><strong>Discovery:</strong> Consumer finds services in the registry (optional)</li>
                  <li><strong>Binding:</strong> Consumer connects to provider</li>
                  <li><strong>Invocation:</strong> Consumer requests an operation/data</li>
                  <li><strong>Response:</strong> Provider sends the requested data</li>
                </ol>
              </div>
            </div>
            <h2>Step 2️⃣: Web Service Architecture Layers</h2>
            <div className="layer-section">
              <div className="layer-card">
                <div className="layer-number">1</div>
                <h3>🚛 Transport Layer - The Highway System</h3>
                <p><strong>Purpose:</strong> Defines how data travels between systems over the network.</p>
                <div style={{margin: '1rem 0'}}>
                  <strong>Common Transport Protocols:</strong>
                  <ul style={{marginLeft: '2rem', marginTop: '0.5rem'}}>
                    <li><strong>HTTP/HTTPS:</strong> Most common, used by REST APIs and modern web services</li>
                    <li><strong>SMTP:</strong> Email-based services, often for document exchange</li>
                    <li><strong>FTP/SFTP:</strong> File transfer services, bulk data operations</li>
                    <li><strong>TCP/UDP:</strong> Low-level protocols for high-performance applications</li>
                    <li><strong>WebSockets:</strong> Real-time bidirectional communication</li>
                  </ul>
                </div>
                <div className="example-box">
                  <strong>Example:</strong> When you use a weather app, it sends an HTTP request like:<br />
                  <code>GET https://api.weather.com/v1/current?location=London</code>
                </div>
              </div>
              <div className="layer-card">
                <div className="layer-number">2</div>
                <h3>📦 Messaging Layer - The Package Format</h3>
                <p><strong>Purpose:</strong> Defines the structure and format of data being exchanged.</p>
                <div className="feature-grid">
                  <div className="feature-card">
                    <span className="feature-icon">🏷️</span>
                    <div className="feature-title">XML Format</div>
                    <div className="code-block" data-lang="XML"><pre><span className="xml">&lt;weather&gt;</span>{"\n"}{"  "}<span className="xml">&lt;city&gt;</span>London<span className="xml">&lt;/city&gt;</span>{"\n"}{"  "}<span className="xml">&lt;temperature <span className="attribute">unit=</span><span className="string">"celsius"</span>&gt;</span>22<span className="xml">&lt;/temperature&gt;</span>{"\n"}{"  "}<span className="xml">&lt;condition&gt;</span>Sunny<span className="xml">&lt;/condition&gt;</span>{"\n"}{"  "}<span className="xml">&lt;humidity&gt;</span>65%<span className="xml">&lt;/humidity&gt;</span>{"\n"}<span className="xml">&lt;/weather&gt;</span></pre>
                    </div>
                  </div>
                  <div className="feature-card">
                    <span className="feature-icon">📋</span>
                    <div className="feature-title">JSON Format</div>
                    <div className="code-block" data-lang="JSON">
                      <pre>{"{"}{"\n"}{"  "}<span className="string">"city"</span>: <span className="string">"London"</span>,{"\n"}{"  "}<span className="string">"temperature"</span>: {"{"}{"\n"}{"    "}<span className="string">"value"</span>: <span className="number">22</span>,{"\n"}{"    "}<span className="string">"unit"</span>: <span className="string">"celsius"</span>{"\n"}{"  "}{"}"},{"\n"}{"  "}<span className="string">"condition"</span>: <span className="string">"Sunny"</span>,{"\n"}{"  "}<span className="string">"humidity"</span>: <span className="string">"65%"</span>{"\n"}{"}"}{"\n"}</pre>
                    </div>
                  </div>
                </div>
                <div style={{margin: '1rem 0'}}>
                  <strong>Format Comparison:</strong>
                  <ul style={{marginLeft: '2rem', marginTop: '0.5rem'}}>
                    <li><strong>JSON:</strong> Lightweight, human-readable, widely supported</li>
                    <li><strong>XML:</strong> Structured, supports schemas, better for complex data</li>
                    <li><strong>Protocol Buffers:</strong> Binary format, very efficient</li>
                    <li><strong>MessagePack:</strong> Compact binary serialization</li>
                  </ul>
                </div>
              </div>
              <div className="layer-card">
                <div className="layer-number">3</div>
                <h3>📖 Service Description Layer - The Manual</h3>
                <p><strong>Purpose:</strong> Provides documentation and specifications for how to use the service.</p>
                <div className="comparison-grid">
                  <div className="comparison-card soap">
                    <h4>SOAP Services - WSDL</h4>
                    <div className="code-block" data-lang="WSDL">
                    <pre> <span className="xml">&lt;definitions name=<span className="string">"WeatherService"</span>&gt;{"\n"}{"  "}<span className="xml">&lt;types&gt;</span>{"\n"}{"    "}<span className="xml">&lt;schema&gt;</span>{"\n"}{"      "}<span className="xml">&lt;element name=<span className="string">"GetWeatherRequest"</span>&gt;</span>{"\n"}{"        "}<span className="xml">&lt;complexType&gt;</span>{"\n"}{"          "}<span className="xml">&lt;sequence&gt;</span>{"\n"}{"            "}<span className="xml">&lt;element name=<span className="string">"city"</span> type=<span className="string">"string"</span>/&gt;</span>{"\n"}{"          "}<span className="xml">&lt;/sequence&gt;</span>{"\n"}{"        "}<span className="xml">&lt;/complexType&gt;</span>{"\n"}{"      "}<span className="xml">&lt;/element&gt;</span>{"\n"}{"    "}<span className="xml">&lt;/schema&gt;</span>{"\n"}{"  "}<span className="xml">&lt;/types&gt;</span>{"\n"}<span className="xml">&lt;/definitions&gt;</span>{"\n"}</pre>
                    </div>
                  </div>
                  <div className="comparison-card rest">
                    <h4>REST Services - OpenAPI/Swagger</h4>
                    <div className="code-block" data-lang="YAML">
                      <pre>{"{"}{"\n"}{"  "}"openapi": "3.0.0",{"\n"}{"  "}"info": {"{"} "title": "Weather API", "version": "1.0.0" {"}"},{"\n"}{"  "}"paths": {"{"}{"\n"}{"    "}"/weather": {"{"} "get": {"{"} "summary": "Get current weather" {"}"} {"}"}{"\n"}{"  "}{"}"}{"\n"}{"}"}</pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layer-card">
                <div className="layer-number">4</div>
                <h3>🔍 Service Discovery Layer - The Phone Book</h3>
                <p><strong>Purpose:</strong> Helps applications find and connect to available services.</p>
                <div style={{margin: '1rem 0'}}>
                  <strong>Discovery Mechanisms:</strong>
                  <ul style={{marginLeft: '2rem', marginTop: '0.5rem'}}>
                    <li><strong>UDDI (Legacy):</strong> Universal Description, Discovery, and Integration</li>
                    <li><strong>Service Registries:</strong> Eureka, Consul, Zookeeper</li>
                    <li><strong>API Gateways:</strong> Kong, AWS API Gateway, Azure API Management</li>
                    <li><strong>Service Mesh:</strong> Istio, Linkerd for microservices</li>
                    <li><strong>DNS-based:</strong> Service discovery via DNS records</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2>Step 3️⃣: Types of Web Services</h2>
            <div className="comparison-section">
              <h3>📊 Service Type Comparison</h3>
              <div className="comparison-grid">
                <div className="comparison-card soap">
                  <h4>SOAP Web Service (Strict XML-based)</h4>
                  <ul>
                    <li><strong>Transport Layer:</strong> HTTP</li>
                    <li><strong>Messaging Layer:</strong> SOAP (XML)</li>
                    <li><strong>Description Layer:</strong> WSDL</li>
                    <li><strong>Discovery Layer:</strong> UDDI</li>
                    <li><strong>Use Case:</strong> Banking, Payment Gateways</li>
                  </ul>
                  <div className="code-block" data-lang="XML">
                    <span className="xml">&lt;soap:Envelope&gt;<br />  &lt;soap:Body&gt;<br />    &lt;getBalance&gt;<br />      &lt;accountNumber&gt;12345&lt;/accountNumber&gt;<br />    &lt;/getBalance&gt;<br />  &lt;/soap:Body&gt;<br />&lt;/soap:Envelope&gt;</span>
                  </div>
                </div>
                <div className="comparison-card rest">
                  <h4>RESTful Web Service (Lightweight JSON)</h4>
                  <ul>
                    <li><strong>Transport Layer:</strong> HTTP/HTTPS</li>
                    <li><strong>Messaging Layer:</strong> JSON</li>
                    <li><strong>Description Layer:</strong> OpenAPI/Swagger</li>
                    <li><strong>Discovery Layer:</strong> API Gateway</li>
                    <li><strong>Use Case:</strong> Weather APIs, Social Media, Microservices</li>
                  </ul>
                  <div className="code-block" data-lang="JSON">
                    GET https://api.weather.com/v1/current?city=Bangalore<br /><br />
                    {'{'}<br />  "city": "Bangalore",<br />  "temperature": "28°C"<br />{'}'}
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-grid">
              <div className="feature-card">
                <span className="feature-icon">🔗</span>
                <div className="feature-title">XML-RPC (Old RPC-style XML)</div>
                <div className="code-block" data-lang="XML">
                  <span className="xml">&lt;methodCall&gt;<br />  &lt;methodName&gt;getWeather&lt;/methodName&gt;<br />  &lt;params&gt;<br />    &lt;param&gt;&lt;value&gt;&lt;string&gt;Bangalore&lt;/string&gt;&lt;/value&gt;&lt;/param&gt;<br />  &lt;/params&gt;<br />&lt;/methodCall&gt;</span>
                </div>
              </div>
              <div className="feature-card">
                <span className="feature-icon">📝</span>
                <div className="feature-title">JSON-RPC (RPC-style JSON)</div>
                <div className="code-block" data-lang="JSON">
                  {'{'}<br />  "jsonrpc": "2.0",<br />  "method": "getWeather",<br />  "params": ["Bangalore"],<br />  "id": 1<br />{'}'}
                </div>
              </div>
            </div>
            <h2>Step 4️⃣: Summary Table</h2>
            <table className="modern-table">
              <tbody><tr>
                  <th>Layer</th>
                  <th>SOAP Example</th>
                  <th>REST Example</th>
                </tr>
                <tr>
                  <td>Transport</td>
                  <td>HTTP, SMTP</td>
                  <td>HTTP/HTTPS</td>
                </tr>
                <tr>
                  <td>Messaging</td>
                  <td>SOAP (XML)</td>
                  <td>JSON</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>WSDL</td>
                  <td>OpenAPI (Swagger)</td>
                </tr>
                <tr>
                  <td>Discovery</td>
                  <td>UDDI</td>
                  <td>API Gateway, Registry</td>
                </tr>
              </tbody></table>
            <div className="key-takeaways">
              <h3>🎯 Key Takeaways</h3>
              <div className="takeaway-grid">
                <div className="takeaway-item">
                  <strong>Web Services</strong> are bridges between apps on the web.
                </div>
                <div className="takeaway-item">
                  <strong>Architecture</strong> includes Provider, Requestor, Registry, and four main layers.
                </div>
                <div className="takeaway-item">
                  <strong>Types:</strong> SOAP (protocol/XML), REST (resource/JSON), RPC (remote call).
                </div>
                <div className="takeaway-item">
                  <strong>Practice:</strong> Use SOAP for tight contracts (banking), REST for simplicity (modern APIs).
                </div>
              </div>
            </div>
          </div>
        </div>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default WebServicesExplanation;