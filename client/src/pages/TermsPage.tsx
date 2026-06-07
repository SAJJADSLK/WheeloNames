import Header from "@/components/Header";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <section className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Wheeloname.com ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Wheeloname for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the Website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. Disclaimer</h2>
            <p>
              The materials on Wheeloname are provided on an "as is" basis. Wheeloname makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Limitations</h2>
            <p>
              In no event shall Wheeloname or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Wheeloname, even if Wheeloname or a Wheeloname authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Wheeloname could include technical, typographical, or photographic errors. Wheeloname does not warrant that any of the materials on its Website are accurate, complete, or current. Wheeloname may make changes to the materials contained on its Website at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">6. Links</h2>
            <p>
              Wheeloname has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Wheeloname of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">7. Modifications</h2>
            <p>
              Wheeloname may revise these terms of service for its Website at any time without notice. By using this Website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">9. User Responsibilities</h2>
            <p className="mb-3">You agree that you are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of any account information</li>
              <li>Using the Website in compliance with all applicable laws and regulations</li>
              <li>Not using the Website for any illegal or unauthorized purpose</li>
              <li>Not interfering with or disrupting the Website or its services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">10. Content Rights</h2>
            <p>
              You retain all rights to any content you create using Wheeloname. By using our service, you grant us a license to use your content for the purpose of providing and improving our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">11. Termination</h2>
            <p>
              Wheeloname may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">12. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-3">
              <strong>Email:</strong> support@wheeloname.com<br />
              <strong>Website:</strong> www.wheeloname.com
            </p>
          </div>

          <div className="text-sm text-gray-500 mt-12 pt-6 border-t">
            <p><strong>Last Updated:</strong> June 5, 2026</p>
            <p><strong>Effective Date:</strong> June 5, 2026</p>
          </div>
        </section>
      </main>
    </div>
  );
}
