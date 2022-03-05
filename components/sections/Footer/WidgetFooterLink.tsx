import FooterLink from './FooterLink';

export default function WidgetFooterLink() {
  return (
    <div className="col-lg-8 mt-lg-0 mt-20">
      <div className="row gap-sm-0">
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
          <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
          <ul className="list-unstyled">
            <FooterLink title="About Us" href="/" />
            <FooterLink title="Press Release" href="/" />
            <FooterLink title="Terms of Use" href="/" />
            <FooterLink title="Privacy & Policy" href="/" />
          </ul>
        </div>
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
          <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
          <ul className="list-unstyled">
            <FooterLink title="Refund Policy" href="/" />
            <FooterLink title="Unlock Rewards" href="/" />
            <FooterLink title="Live Chatting" href="/" />
          </ul>
        </div>
        <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
          <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
          <ul className="list-unstyled">
            <FooterLink title="hi@store.gg" href="mailto: hi@store.gg" />
            <FooterLink title="team@store.gg" href="mailto: team@store.gg" />
            <FooterLink
              title="Pasific 12, Jakarta Selatan"
              href="http://maps.google.com/?q=Pasific 12,Jakarta Selatan"
            />
            <FooterLink title="021 - 1122 - 9090" href="tel: 02111229090" />
          </ul>
        </div>
      </div>
    </div>
  );
}
