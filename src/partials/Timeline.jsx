import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeline_launch from '../images/timeline-launch.png';
import timeline_nutrition from '../images/timeline-nutrition.png';
import timeline_habit from '../images/timeline-habit.png';
import timeline_motivation from '../images/timeline-motivation.png';
import timeline_discord from '../images/timeline-discord.png';
import timeline_points from '../images/timeline-points.png';
import timeline_raffle from '../images/timeline-raffle.png';
import timeline_taskhuman from '../images/timeline-taskhuman.png';
import timeline_leaderboard from '../images/timeline-leaderboard.png';
import timeline_governance from '../images/timeline-governance.png';
import timeline_cards from '../images/timeline-cards.png';
import timeline_gym from '../images/timeline-gym.png';
import timeline_wellness from '../images/timeline-wellness.png';
import timeline_blockchain from '../images/timeline-blockchain.png';

function Timeline() {
  return (
    <section id="timeline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Roadmap</h2>
            <p className="text-xl text-gray-400">Timeline of the future development</p>
          </div>

          {/* Timeline */}
            <VerticalTimeline>
            
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Phase 1 (less than 6 month after launch)"
                iconStyle={{ background: 'rgb(0, 198, 114)', color: '#fff' }}
                icon={<img src={timeline_launch} />}
              >
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(0, 114, 198)' }}
                date="(Phase 1)"
                iconStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                icon={<img src={timeline_nutrition} />}
              >
                <p>
                  Additional nutrition plans and options
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(0, 114, 198)' }}
                date="(Phase 1)"
                iconStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                icon={<img src={timeline_habit} />}
              >
                <p>
                  Habit and lifestyle coaching plans
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(0, 114, 198)' }}
                date="(Phase 1)"
                iconStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                icon={<img src={timeline_motivation} />}
              >
                <p>
                  Accountability and motivation, meal plan, grocery list
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(0, 114, 198)' }}
                date="(Phase 1)"
                iconStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                icon={<img src={timeline_discord} />}
              >
                <p>
                  Discord Yur bot exercise tracking
                </p>
              </VerticalTimelineElement>

              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Phase 2 (6-12 months after launch)"
                iconStyle={{ background: 'rgb(0, 198, 114)', color: '#fff' }}
                icon={<img src={timeline_launch} />}
              >
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(191, 94, 56)' }}
                date="(Phase 2)"
                iconStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                icon={<img src={timeline_points} />}
              >
                <p>
                  Implement point tracking and usage
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(191, 94, 56)' }}
                date="(Phase 2)"
                iconStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                icon={<img src={timeline_raffle} />}
              >
                <p>
                  Lucky draw raffle with daily, weekly and monthly rewards
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(191, 94, 56)' }}
                date="(Phase 2)"
                iconStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                icon={<img src={timeline_taskhuman} />}
              >
                <p>
                  TaskHuman NFT upgrade option
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(191, 94, 56)' }}
                date="(Phase 2)"
                iconStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                icon={<img src={timeline_leaderboard} />}
              >
                <p>
                  Leaderboard and bonus point utility
                </p>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Phase 3 (12-24 months after launch)"
                iconStyle={{ background: 'rgb(0, 198, 114)', color: '#fff' }}
                icon={<img src={timeline_launch} />}
              >
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(0, 114, 198)' }}
                date="(Phase 3)"
                iconStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                icon={<img src={timeline_governance} />}
              >
                <p>
                  Governance for community voting and reward pool
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(0, 114, 198)' }}
                date="(Phase 3)"
                iconStyle={{ background: 'rgb(0, 114, 198)', color: '#fff' }}
                icon={<img src={timeline_cards} />}
              >
                <p>
                  CryptoFif NFT battle card game
                </p>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Phase 4+ (2+ years after launch)"
                iconStyle={{ background: 'rgb(0, 198, 114)', color: '#fff' }}
                icon={<img src={timeline_launch} />}
              >
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(191, 94, 56)' }}
                date="(Phase 4)"
                iconStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                icon={<img src={timeline_gym} />}
              >
                <p>
                  IRL Gym memberships
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(191, 94, 56)' }}
                date="(Phase 4)"
                iconStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                icon={<img src={timeline_wellness} />}
              >
                <p>
                  IRL Wellness conferences
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '26px solid rgb(191, 94, 56)' }}
                date="(Phase 4)"
                iconStyle={{ background: 'rgb(191, 94, 56)', color: '#fff' }}
                icon={<img src={timeline_blockchain} />}
              >
                <p>
                  "True" POW Blockchain
                </p>
              </VerticalTimelineElement>

            </VerticalTimeline>

        </div>
      </div>
    </section>
  );
}

export default Timeline;
